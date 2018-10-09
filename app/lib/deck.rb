class Deck
  attr_reader :cards

  def initialize
    @cards = build_deck
  end

  def shuffle
    cards.shuffle!
    self
  end

  def draw(amount)
    cards.shift(amount)
  end

  private

  def build_deck
    Rank::ALL.flat_map do |rank|
      Suit::ALL.flat_map do |suit|
        Card.new(rank, suit)
      end
    end
  end
end
