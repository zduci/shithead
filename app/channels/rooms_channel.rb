class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "rooms:#{params[:slug]}"
  end
  
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
