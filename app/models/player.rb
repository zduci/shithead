# Serialized fields break unless these classes are loaded
Rank
Card

class Player < ActiveRecord::Base
  belongs_to :game
  has_one :room, through: :game

  validates_uniqueness_of :name, scope: :game_id

  serialize :hand, Hand
  serialize :face_down_cards, Set
  serialize :face_up_cards, Set

  def opponents
    game.players.where.not(id: id)
  end
end
