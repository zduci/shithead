class Player < ActiveRecord::Base
  belongs_to :game

  validates_uniqueness_of :name, scope: :game_id
end
