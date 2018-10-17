class Hand
  attr_reader :cards

  def initialize(cards = [])
    @cards = Set.new(cards.sort)
  end
end
