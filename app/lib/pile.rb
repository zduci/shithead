class Pile
  attr_reader :cards

  def initialize(cards = [])
    @cards = Set.new(cards.to_a)
  end

  def +(new_cards)
    Pile.new(cards.to_a + new_cards.to_a)
  end

  def top_cards
    return [] unless cards.first
    top_cards = [cards.first]
    rank = top_cards.first.rank
    rank_matches = true
    while (rank_matches) do
      next_card = cards.to_a[top_cards.size]
      if rank_matches = next_card && next_card.rank == rank
        top_cards << next_card
      end
    end
    top_cards
  end

  def size
    cards.size
  end
end
