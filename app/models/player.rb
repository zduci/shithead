class Player < ActiveRecord::Base
  belongs_to :game
  has_one :room, through: :game

  validates_uniqueness_of :name, scope: :game_id

  serialize :hand, Hand
  serialize :face_down_cards, Array
  serialize :face_up_cards, Array

  def opponents
    game.players.where.not(id: id)
  end
end
