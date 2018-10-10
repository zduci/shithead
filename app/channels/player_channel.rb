class PlayerChannel < ApplicationCable::Channel
  def subscribed
    stream_from player
  end

  def unsubscribed
  end

  private

  def player
    "player_#{current_player.id}"
  end
end
