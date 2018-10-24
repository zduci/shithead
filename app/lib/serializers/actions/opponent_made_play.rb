module Serializers
  module Actions
    class OpponentMadePlay
      def initialize(opponent)
        @opponent = opponent
      end

      def to_h
        { type: 'OPPONENT_MADE_PLAY',
          game: Serializers::Game.new(opponent.game).to_h,
          opponent: Serializers::Opponent.new(opponent).to_a,
          deck: Serializers::HiddenCards.new(opponent.game.deck.cards).to_h,
          pile: Serializers::Pile.new(opponent.game.pile).to_h }
      end

      private

      attr_reader :player
    end
  end
end
