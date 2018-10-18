class Deck
  def self.build
    new(
      Rank::ALL.flat_map do |rank|
        Suit::ALL.flat_map do |suit|
          Card.new(rank, suit)
        end
      end)
  end

  attr_reader :cards

  def initialize(cards = [])
    @cards = Set.new(cards)
  end

  def shuffle
    Deck.new(cards.to_a.shuffle)
  end

  def draw!(amount)
    card_array = cards.to_a
    cards_drawn = Set.new(card_array.shift(amount))
    @cards = Set.new(card_array)
    cards_drawn
  end
end
