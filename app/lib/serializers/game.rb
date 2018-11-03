module Serializers
  class Game
    def initialize(game)
      @game = game
    end

    def to_h
      { status: game.status,
        playerTurnId: game.player_turn_id,
        winnerId: game.winner_id }
    end

    private

    attr_reader :game
  end
end
