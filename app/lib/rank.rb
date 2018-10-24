class Rank
  include Comparable

  attr_reader :name, :value

  def initialize(name, value)
    @name = name
    @value = value
  end

  TWO = new('2', 2)
  THREE = new('3', 3)
  FOUR = new('4', 4)
  FIVE = new('5', 5)
  SIX = new('6', 6)
  SEVEN = new('7', 7)
  EIGHT = new('8', 8)
  NINE = new('9', 9)
  TEN = new('10', 10)
  JACK = new('J', 11)
  QUEEN = new('Q', 12)
  KING = new('K', 13)
  ACE = new('A', 14)

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
