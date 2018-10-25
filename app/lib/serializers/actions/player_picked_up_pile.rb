module Serializers
  module Actions
    class PlayerPickedUpPile
      def initialize(player)
        @player = player
      end

      def to_h
        { type: 'PLAYER_PICKED_UP_PILE',
          player: Serializers::Player.new(player).to_h,
          game: Serializers::Game.new(player.game).to_h,
          pile: Serializers::Pile.new(player.game.pile).to_h }
      end

      private

      attr_reader :player
    end
  end
end
