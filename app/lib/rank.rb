class Rank
  attr_reader :name, :value

  def initialize(name, value)
    @name = name
    @value = value
  end

  ACE = new('ace', 1)
  TWO = new('two', 2)
  THREE = new('three', 3)
  FOUR = new('four', 4)
  FIVE = new('five', 5)
  SIX = new('six', 6)
  SEVEN = new('seven', 7)
  EIGHT = new('eight', 8)
  NINE = new('nine', 9)
  TEN = new('ten', 10)
  JACK = new('jack', 11)
  QUEEN = new('queen', 12)
  KING = new('king', 13)

  ALL = [ACE, TWO, THREE, FOUR, FIVE, SIX, SEVEN,
         EIGHT, NINE, TEN, JACK, QUEEN, KING].freeze

  def ==(other)
    other.class == Rank &&
      name == other.name &&
      value == other.value
  end

  def eql?(other)
    other.class == Rank &&
      name == other.name &&
      value == other.value
  end

  def <=>(other)
    other.class == Rank &&
      value <=> other.value
  end

  def hash
    [name, value].hash
  end
end
