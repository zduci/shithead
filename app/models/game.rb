class Game < ActiveRecord::Base
  module Status
    JOINING = :joining
    PLAYING = :playing
    ENDED = :ended

    ALL = [JOINING, PLAYING, ENDED]
  end

  enum status: Status::ALL

  belongs_to :room
  has_many :players
end
