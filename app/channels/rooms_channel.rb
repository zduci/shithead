class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "rooms:#{params[:slug]}"
  end

  def player_is_ready(data)
    ActionCable.server.broadcast("rooms:#{params[:slug]}", data)
  end

  def unsubscribed
  end
end
