module Serializers
  module Actions
    class OpponentMadePlay
      def initialize(player, opponent)
        @player = player
        @opponent = opponent
      end

      def to_h
        { type: 'OPPONENT_MADE_PLAY',
          player: Serializers::Player.new(player).to_h,
          game: Serializers::Game.new(player.game).to_h,
          opponent: Serializers::Opponent.new(opponent).to_h,
          deck: Serializers::HiddenCards.new(player.game.deck.cards).to_h,
          pile: Serializers::Pile.new(player.game.pile).to_h }
      end

      private

      attr_reader :player, :opponent
    end
  end
end
