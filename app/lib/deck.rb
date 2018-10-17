class Deck
  attr_reader :cards

  def initialize
    @cards = build_deck
  end

  def shuffle
    @cards = Set.new(cards.to_a.shuffle!)
    self
  end

  def draw(amount)
    card_array = cards.to_a
    cards_drawn = Set.new(card_array.shift(amount))
    @cards = Set.new(card_array)
    cards_drawn
  end

  private

  def build_deck
    Set.new(
      Rank::ALL.flat_map do |rank|
        Suit::ALL.flat_map do |suit|
          Card.new(rank, suit)
        end
      end)
  end
end
