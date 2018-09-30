class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "rooms:#{params[:slug]}"
  end

  def player_is_ready(data)
    player_id = data['dispatchAction']['opponent_id']
    Player.find(player_id).update(is_ready: true)
    ActionCable.server.broadcast("rooms:#{params[:slug]}", data)
  end

  def unsubscribed
  end
end
