class LoginController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create

  def create
    JoinGame.in(room_name).add(player_name)
    render json: {
      success: true,
      data: {}
    }
  rescue StandardError => e
    render json: {
      success: false,
      messages: e.message
    }
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
end
