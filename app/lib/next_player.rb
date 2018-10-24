class NextPlayer
  def initialize(game)
    @game = game
  end

  def get
    players = game.players.to_a
    index = players.find_index(game.player_turn)
    players[next_player_index(index, players.size)]
  end

  private

  attr_reader :game

  def next_player_index(current_player_index, total_players)
    return 0 if current_player_index == total_players - 1
    current_player_index + 1
  end
end
