module Policies
  class IsWinner
    def initialize(player)
      @player = player
    end

    def check?
      player.hand.empty? &&
        player.face_up_cards.empty? &&
        player.face_down_cards.empty?
    end

    private

    attr_reader :player
  end
end
