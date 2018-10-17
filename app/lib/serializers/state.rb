module Serializers
  class State
    def initialize(player)
      @player = player
    end

    def to_h
      if player
        { player: Serializers::Player.new(player).to_h,
          room: Serializers::Room.new(player.room).to_h,
          game: Serializers::Game.new(player.game).to_h,
          opponents: Serializers::Opponents.new(player.opponents).to_a,
          deck: Serializers::HiddenCards.new(player.game.deck.cards).to_h }
      else
        { player: nil,
          room: nil,
          game: nil,
          opponents: [],
          deck: nil }
      end
    end

    private

    attr_reader :player
  end
end
