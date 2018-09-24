class Room < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :games
end
