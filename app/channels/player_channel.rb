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
    PlayerBroadcast.new(current_player).player_made_play
    PlayerBroadcast.opponent_made_play(current_player)
  end

  def unsubscribed
  end

  private

  def player
    "player_#{current_player.id}"
  end
end
