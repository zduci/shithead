class CheckForWinner
  def initialize(game)
    @game = game
  end

  def check
    if winner = find_winner
      game.winner = winner
      game.ended!
      game.save!
    end
  end

  private

  attr_reader :game

  def find_winner
    game.players.find { |player| Policies::IsWinner.new(player).check? }
  end
end
