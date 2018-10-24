module Serializers
  module Actions
    class PlayerMadePlay
      def initialize(player)
        @player = player
      end

      def to_h
        { type: 'PLAYER_MADE_PLAY',
          player: Serializers::Player.new(player).to_h,
          game: Serializers::Game.new(player.game).to_h,
          deck: Serializers::HiddenCards.new(player.game.deck.cards).to_h,
          pile: Serializers::Pile.new(player.game.pile).to_h }
      end

      private

      attr_reader :player
    end
  end
end
