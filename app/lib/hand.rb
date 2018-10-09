class Hand
  attr_reader :cards

  def initialize(cards = [])
    @cards = cards.sort
  end
end
