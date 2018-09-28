class JoinGame
  module Errors
    GAME_IN_PROGRESS = StandardError.new('Game in progress, try different room')
    ROOM_FULL = StandardError.new('This room is full, try different room')
  end

  def self.in(room_name)
    room = find_or_create_room(room_name)
    game = room.game
    raise Errors::GAME_IN_PROGRESS if game.playing?
    game = room.games.create! if game.ended?
    new(game)
  end

  def initialize(game)
    @game = game
  end

  def add(player_name)
    raise Errors::ROOM_FULL if game.players.count == Game::MAX_PLAYERS
    player = game.players.create!(name: player_name)
    [game.room, player]
  end

  private

  def self.find_or_create_room(name)
    Room.find_by(name: name) ||
      Room.create!(name: name)
  end

  attr_reader :game
end
