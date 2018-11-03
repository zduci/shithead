class PlayerChannel < ApplicationCable::Channel
  def subscribed
    stream_from player
  end

  def select_hand(data)
    cards = data['cards']
    current_player.reload
    SelectHand.new(current_player).select(cards)
    PlayerBroadcast.new(current_player).receive_initial_state
    RoomBroadcast.build(current_player.room.slug)
                 .set_opponent_hand(current_player)
  end

  def make_play(data)
    card_ids = data['cards']
    current_player.reload
    MakePlay.new(current_player).play(card_ids)
    current_player.reload
    CheckForWinner.new(current_player.game).check
    PlayerBroadcast.new(current_player).player_made_play
    PlayerBroadcast.opponent_made_play(current_player)
  end

  def pick_up_pile
    current_player.reload
    PickUpPile.new(current_player).pick_up
    PlayerBroadcast.new(current_player).player_picked_up_pile
    PlayerBroadcast.opponent_picked_up_pile(current_player)
  end

  def flip_card(data)
    index = data['card']
    current_player.reload
    FlipCard.new(current_player).flip(index)
    PlayerBroadcast.new(current_player).player_flipped_card
    PlayerBroadcast.opponent_flipped_card(current_player)
  end

  def unsubscribed
  end

  private

  def player
    "player_#{current_player.id}"
  end
end
