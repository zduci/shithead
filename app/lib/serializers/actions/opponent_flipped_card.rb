module Serializers
  module Actions
    class OpponentFlippedCard
      def initialize(opponent)
        @opponent = opponent
      end

      def to_h
        { type: 'OPPONENT_FLIPPED_CARD',
          opponent: Serializers::Opponent.new(opponent).to_h }
      end

      private

      attr_reader :player, :opponent
    end
  end
end
