module Serializers
  class Player
    def initialize(player)
      @player = player
    end

    def to_h
      available_plays = ::AvailablePlays.new(player).get
      { id: player.id,
        name: player.name,
        isReady: player.is_ready,
        hand: Cards.new(player.hand.cards).to_a,
        faceDownCards: HiddenCards.new(player.face_down_cards).to_h,
        faceUpCards: Cards.new(player.face_up_cards).to_a,
        hasSelectedHand: player.has_selected_hand,
        available_plays: Serializers::AvailablePlays.new(available_plays).to_h }
    end

    private

    attr_reader :player
  end
end
