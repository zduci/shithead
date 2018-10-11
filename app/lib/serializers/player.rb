module Serializers
  class Player
    def initialize(player)
      @player = player
    end

    def to_h
      { name: player.name,
        hand: Cards.new(player.hand.cards).to_a,
        faceDownCards: HiddenCards.new(player.face_down_cards).to_h,
        faceUpCards: Cards.new(player.face_up_cards).to_a,
        hasSelectedHand: player.has_selected_hand }
    end

    private

    attr_reader :player
  end
end
