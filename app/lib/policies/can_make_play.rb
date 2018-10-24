module Policies
  class CanMakePlay
    def initialize(player, cards)
      @player = player
      @cards = cards
    end

    def check?
      AvailablePlays.new(player).get.values.flatten(1).include?(cards)
    end

    private

    attr_reader :player, :cards
  end
end
