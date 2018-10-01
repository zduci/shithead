class LoginController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

  def create
    room, player = JoinGame.in(room_name).add(player_name)

    cookies.encrypted[:player_id] = player.id

    broadcast_add_player(room, player)

    render json: {
      success: true,
      data: { room: room }
    }
  rescue StandardError => e
    render json: {
      success: false,
      messages: e.message
    }
  end

  def destroy
    player = Player.find_by(id: cookies.encrypted[:player_id])
    if player
      ActionCable.server.remote_connections.where(current_player: player).disconnect
      player_id = player.id
      slug = player.room.slug
      player.destroy!
      cookies.delete(:player_id)

      broadcast_remove_player(slug, player.id)
    end
    head :ok
  end

  private

  def room_name
    login_params[:room]
  end

  def player_name
    login_params[:player]
  end

  def login_params
    params.require(:login).permit(:player, :room)
  end

  def broadcast_add_player(room, player)
    ActionCable.server.broadcast(
      "rooms_#{room.slug}",
      dispatchAction: {
        type: 'ADD_OPPONENT',
        opponent: player
      }
    )
  end

  def broadcast_remove_player(slug, player_id)
    ActionCable.server.broadcast(
      "rooms_#{slug}",
      dispatchAction: {
        type: 'REMOVE_OPPONENT',
        opponent_id: player_id
      }
    )
  end
end
