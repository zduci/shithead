class DrawCards
  MIN_HAND_SIZE = 3

  def initialize(player)
    @player = player
    @game = player.game
    @deck = @game.deck
  end

  def draw
    if player.hand.size < MIN_HAND_SIZE && !deck.empty?
      cards_drawn = deck.draw!(MIN_HAND_SIZE - player.hand.size)
      player.update!(hand: player.hand + cards_drawn)
      game.update!(deck: deck)
    end
  end

  private

  attr_reader :player, :game, :deck
end
