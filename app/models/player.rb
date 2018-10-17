# For some reason these don't get loaded before this model so they need to be
# referenced in order for the card serialization to work
Card
Rank

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
