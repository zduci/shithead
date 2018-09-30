class LoginController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

  def create
    room, player = JoinGame.in(room_name).add(player_name)

    cookies.encrypted[:player_id] = player.id

    broadcast_player(room, player)

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
      player_id = player.id
      slug = player.room.slug
      player.destroy!
      cookies.delete(:player_id)

      ActionCable.server.broadcast(
        "rooms:#{slug}",
        action: {
          type: 'REMOVE_OPPONENT',
          opponent_id: player_id
        }
      )
    end
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

  def broadcast_player(room, player)
    ActionCable.server.broadcast(
      "rooms:#{room.slug}",
      action: {
        type: 'ADD_OPPONENT',
        opponent: player
      }
    )
  end
end
