module Policies
  class GameReadyToStart
    def initialize(game)
      @game = game
    end

    def check?
      game.players.count > 1 &&
        game.players.all? { |player| player.is_ready? }
    end

    private

    attr_reader :game
  end
end
