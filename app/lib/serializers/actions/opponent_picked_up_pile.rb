module Serializers
  module Actions
    class OpponentPickedUpPile
      def initialize(player, opponent)
        @player = player
        @opponent = opponent
      end

      def to_h
        { type: 'OPPONENT_PICKED_UP_PILE',
          player: Serializers::Player.new(player).to_h,
          game: Serializers::Game.new(player.game).to_h,
          opponent: Serializers::Opponent.new(opponent).to_h,
          pile: Serializers::Pile.new(player.game.pile).to_h }
      end

      private

      attr_reader :player, :opponent
    end
  end
end
