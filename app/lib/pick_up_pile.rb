class PickUpPile
  def initialize(player)
    @player = player
    @game = player.game
  end

  def pick_up
    player.update!(hand: player.hand + game.pile.cards)
    game.update!(pile: Pile.new, player_turn: NextPlayer.new(game).get)
  end

  private

  attr_reader :player, :game
end
