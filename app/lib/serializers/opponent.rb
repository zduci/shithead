module Serializers
  class Opponent
    def initialize(opponent)
      @opponent = opponent
    end

    def to_h
      { id: opponent.id,
        name: opponent.name,
        isReady: opponent.is_ready,
        hand: HiddenCards.new(opponent.hand.cards).to_h,
        faceDownCards: HiddenCards.new(opponent.face_down_cards).to_h,
        faceUpCards: Cards.new(opponent.face_up_cards).to_a,
        hasSelectedHand: opponent.has_selected_hand }
    end

    private

    attr_reader :opponent
  end
end
