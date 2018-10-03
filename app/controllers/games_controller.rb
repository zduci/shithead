class GamesController < ApplicationController
  def show
    player = Player.find_by(id: cookies.encrypted[:player_id])
    if player
      room = player.room
      opponents = room.game.players.where.not(id: player.id)

      render json: {
        success: true,
        data: { room: room,
                player: player,
                opponents: opponents,
                game: room.game } }
    else
      render json: {
        success: true,
        data: { room: nil,
                player: nil,
                opponents: [],
                game: nil } }
    end
  end
end
