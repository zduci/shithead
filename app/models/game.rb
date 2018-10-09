class Game < ActiveRecord::Base
  module Status
    JOINING = 'joining'.freeze
    PLAYING = 'playing'.freeze
    ENDED = 'ended'.freeze

    ALL = [JOINING, PLAYING, ENDED]
  end

  MAX_PLAYERS = 4

  enum status: Status::ALL

  belongs_to :room
  has_many :players, dependent: :destroy

  serialize :deck, Deck
end
