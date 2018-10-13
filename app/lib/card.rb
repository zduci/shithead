class Card
  attr_reader :rank, :suit

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def id
    "#{rank.name}#{suit}"
  end

  def <=>(other)
    rank.value <=> other.rank.value
  end
end
