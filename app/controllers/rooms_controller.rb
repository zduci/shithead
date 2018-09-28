class RoomsController < ApplicationController
  def show
    room = Room.friendly.find(room_params[:slug])

    render json: {
      success: true,
      data: { room: room,
              players: room.game.players,
              player_id: cookies.encrypted[:player_id] } }
  end

  private

  def room_params
    params.permit(:slug)
  end
end
