class PlayerChannel < ApplicationCable::Channel
  def subscribed
    stream_from player
  end

  def select_hand(data)
    cards = data['cards']
    current_player.reload
    SelectHand.new(current_player).select(cards)
    PlayerBroadcast.new(current_player).receiveInitialState
  end

  def unsubscribed
  end

  private

  def player
    "player_#{current_player.id}"
  end
end
