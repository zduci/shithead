module Serializers
  class Pile
    def initialize(pile)
      @pile = pile
    end

    def to_h
      { topCards: Cards.new(pile.top_cards).to_a,
        size: pile.size }
    end

    private

    attr_reader :pile
  end
end
