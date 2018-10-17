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
    other.class == Card &&
      rank.value <=> other.rank.value
  end

  def ==(other)
    other.class == Card &&
      rank == other.rank &&
      suit == other.suit
  end

  def eql?(other)
    other.class == Card &&
      rank == other.rank &&
      suit == other.suit
  end

  def hash
    [rank, suit].hash
  end
end
