module Serializers
  class Game
    def initialize(game)
      @game = game
    end

    def to_h
      { status: game.status }
    end

    private

    attr_reader :game
  end
end
