module Policies
  class IsWildCard
    def initialize(card)
      @card = card
    end

    def check?
      [Rank::TWO, Rank::TEN].include?(card.rank)
    end

    private

    attr_reader :card
  end
end
