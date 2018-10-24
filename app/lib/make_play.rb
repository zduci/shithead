class MakePlay
  def initialize(player)
    @player = player
    @game = player.game
  end

  def play(ids)
    cards = find_cards(ids)
    if can_make_play?(cards)
      if cards.first.rank == Rank::TEN
        play_tens(cards)
      else
        play_cards(cards)
      end
      update_player(cards)
      DrawCards.new(player).draw
    end
  end

  private

  attr_reader :player, :game

  def find_cards(ids)
    player_cards = player.hand.cards + player.face_up_cards
    player_cards.select { |card| ids.include?(card.id) }
  end

  def can_make_play?(cards)
    Policies::CanMakePlay.new(player, cards).check?
  end

  def play_tens(cards)
    burn_pile
  end

  def play_cards(cards)
    new_pile = game.pile + cards
    if new_pile.top_cards.size == Suit::ALL.size
      burn_pile
    else
      game.update!(pile: new_pile, player_turn: NextPlayer.new(game).get)
    end
  end

  def burn_pile
    game.update!(pile: Pile.new)
  end

  def update_player(cards)
    player.hand = player.hand - cards
    player.face_up_cards = player.face_up_cards - cards
    player.save!
  end
end
