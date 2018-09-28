class RoomsController < ApplicationController
  def show
    room = Room.friendly.find(room_params[:slug])
    player_id = cookies.encrypted[:player_id]
    player = room.game.players.find(player_id)
    opponents = room.game.players.where.not(id: player_id)

    render json: {
      success: true,
      data: { room: room,
              player: player,
              opponents: opponents } }
  end

  private

  def room_params
    params.permit(:slug)
  end
end
