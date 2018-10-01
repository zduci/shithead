class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from room
  end

  def player_is_ready(data)
    Player.find(data['dispatchAction']['opponent_id']).update(is_ready: true)
    ActionCable.server.broadcast(room, data)
  end

  def unsubscribed
  end

  private

  def room
    "rooms_#{current_player.room.slug}"
  end
end
