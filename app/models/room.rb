class Room < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :games

  before_create :ensure_game_exists

  def game
    games.last
  end

  private

  def ensure_game_exists
    self.games.new unless game
  end
end
