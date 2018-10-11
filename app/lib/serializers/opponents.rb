module Serializers
  class Opponents
    def initialize(opponents)
      @opponents = opponents
    end

    def to_a
      opponents.map do |opponent|
        { id: opponent.id,
          name: opponent.name,
          isReady: opponent.is_ready,
          hand: HiddenCards.new(opponent.hand.cards).to_h,
          faceDownCards: HiddenCards.new(opponent.face_down_cards).to_h,
          faceUpCards: Cards.new(opponent.face_up_cards).to_a,
          hasSelectedHand: opponent.has_selected_hand }
      end
    end

    private

    attr_reader :opponents
  end
end
