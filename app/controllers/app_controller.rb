class AppController < ApplicationController
  def index
    room_slug = cookies.encrypted[:room_slug]
    if !room_params[:slug] && room_slug
      redirect_to room_path(room_slug)
    end
  end

  private

  def room_params
    params.permit(:slug)
  end
end
