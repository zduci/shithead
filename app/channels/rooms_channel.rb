class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "rooms:#{params[:slug]}"
  end
  
  def unsubscribed
    if params[:slug]
      if current_player
        player_id = current_player.id
        current_player.destroy!

        ActionCable.server.broadcast(
          "rooms:#{params[:slug]}",
          action: {
            type: 'REMOVE_OPPONENT',
            opponent_id: player_id
          }
        )
      end
    end
  end
end
