class GamesController < ApplicationController
  def show
    player = Player.find_by(id: cookies.encrypted[:player_id])

    render json: Serializers::Responses::State.new(player).to_h
  end
end
