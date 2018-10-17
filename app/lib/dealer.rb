class Dealer
  FACE_DOWN_SIZE = 3
  FACE_UP_SIZE = 3
  HAND_SIZE = 3

  def initialize(game)
    @game = game
  end

  def deal
    deck = shuffle_new_deck
    game.players.map { |player| deal_to(player, deck) }
    game.update!(deck: deck)
  end

  private

  attr_reader :game

  def shuffle_new_deck
    deck = Deck.new
    deck.shuffle
  end

  def deal_to(player, deck)
    player.face_down_cards = deck.draw(FACE_DOWN_SIZE)
    player.face_up_cards = deck.draw(FACE_UP_SIZE)
    player.hand = Hand.new(deck.draw(HAND_SIZE))
    player.save!
  end
end
