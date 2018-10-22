module Serializers
  class AvailablePlays
    def initialize(plays)
      @plays = plays
    end

    def to_h
      result = {}
      plays.each do |size, plays|
        result[size] = plays.map { |cards| Cards.new(cards).to_a }
      end
      result
    end

    private

    attr_reader :plays
  end
end
