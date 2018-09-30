class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "rooms:#{params[:slug]}"
  end

  def unsubscribed
  end
end
