class Pile
  attr_reader :cards

  delegate :size, :empty?, to: :cards

  def initialize(cards = [])
    @cards = Set.new(cards.to_a)
  end

  def +(new_cards)
    Pile.new(new_cards.to_a + cards.to_a)
  end

  def top_cards
    return Set.new unless cards.first
    top_cards = [cards.first]
    rank = top_cards.first.rank
    rank_matches = true
    while (rank_matches) do
      next_card = cards.to_a[top_cards.size]
      if rank_matches = next_card && next_card.rank == rank
        top_cards << next_card
      end
    end
    Set.new(top_cards)
  end
end
