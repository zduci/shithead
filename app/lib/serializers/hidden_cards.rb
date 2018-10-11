module Serializers
  class HiddenCards
    def initialize(cards)
      @cards = cards
    end

    def to_h
      { number: cards.size }
    end

    private

    attr_reader :cards
  end
end
