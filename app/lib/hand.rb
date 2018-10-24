class Hand
  attr_reader :cards

  def initialize(cards = [])
    @cards = Set.new(cards.to_a.sort)
  end

  def +(other_cards)
    Hand.new(cards + other_cards)
  end

  def -(other_cards)
    Hand.new(cards - other_cards)
  end

  def empty?
    cards.empty?
  end

  def size
    cards.size
  end
end
