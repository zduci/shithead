class AppController < ApplicationController
  def index
    unless room_params[:slug]
      player_id = cookies.encrypted[:player_id]
      player = Player.find_by(id: player_id)
      redirect_to room_path(player.room.slug) if player
    end
  end

  private

  def room_params
    params.permit(:slug)
  end
end
