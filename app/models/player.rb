class Player < ActiveRecord::Base
  belongs_to :game
  has_one :room, through: :game

  validates_uniqueness_of :name, scope: :game_id
end
