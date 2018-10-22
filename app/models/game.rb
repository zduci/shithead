class Game < ActiveRecord::Base
  module Status
    JOINING = 'joining'.freeze
    PLAYING = 'playing'.freeze
    ENDED = 'ended'.freeze
    ABANDONED = 'abandoned'.freeze

    ALL = [JOINING, PLAYING, ENDED, ABANDONED]
  end

  MAX_PLAYERS = 2

  enum status: Status::ALL

  belongs_to :room
  has_many :players, dependent: :destroy

  serialize :deck, Deck
  serialize :pile, Pile
end
