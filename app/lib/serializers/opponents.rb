module Serializers
  class Opponents
    def initialize(opponents)
      @opponents = opponents
    end

    def to_a
      opponents.map { |opponent| Opponent.new(opponent).to_h }
    end

    private

    attr_reader :opponents
  end
end
