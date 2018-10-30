module Serializers
  module Actions
    class PlayerFlippedCard
      def initialize(player)
        @player = player
      end

      def to_h
        { type: 'PLAYER_FLIPPED_CARD',
          player: Serializers::Player.new(player).to_h }
      end

      private

      attr_reader :player
    end
  end
end
