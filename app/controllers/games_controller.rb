class GamesController < ApplicationController
  def show
    @player = Player.find_by(id: cookies.encrypted[:player_id])
  end
end
