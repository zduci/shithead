class Player < ActiveRecord::Base
  belongs_to :game
  has_one :room, through: :game

  validates_uniqueness_of :name, scope: :game_id

  def opponents
    game.players.where.not(id: id)
  end
end
