module Serializers
  class Cards
    def initialize(cards)
      @cards = cards
    end

    def to_a
      cards.map do |card|
        { id: card.id,
          rank: card.rank.name,
          suit: card.suit }
      end
    end

    private

    attr_reader :cards
  end
end
