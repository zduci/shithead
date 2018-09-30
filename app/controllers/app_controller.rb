class AppController < ApplicationController
  def index
    player_id = cookies.encrypted[:player_id]
    player = Player.find_by(id: player_id)
    if room_params[:slug]
      redirect_to root_path unless player
    else
      redirect_to room_path(player.room.slug) if player
    end
  end

  private

  def room_params
    params.permit(:slug)
  end
end
