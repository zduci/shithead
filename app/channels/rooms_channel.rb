class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "rooms:#{params[:slug]}"
  end
  
  def unsubscribed
    if params[:slug]
      Player.find(params[:player_id]).destroy!
      ActionCable.server.broadcast(
        "rooms:#{params[:slug]}",
        action: {
          type: 'REMOVE_OPPONENT',
          opponent_id: params[:player_id]
        }
      )
    end
  end
end
