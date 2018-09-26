class JoinGame
  module Errors
    GAME_IN_PROGRESS = StandardError.new('Game in progress, try different room')
  end

  def self.in(room_name)
    game = find_or_create_room(room_name).game
    unless game.playing?
      new(game)
    else
      raise Errors::GAME_IN_PROGRESS
    end
  end

  def initialize(game)
    @game = game
  end

  def add(player_name)
  end

  private

  def self.find_or_create_room(name)
    Room.friendly.find(name)
  rescue
    Room.create!(name: name)
  end

  attr_reader :game
end
