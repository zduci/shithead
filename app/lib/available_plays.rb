class AvailablePlays
  def initialize(player)
    @player = player
    @pile = player.game.pile
  end

  def get
    player.hand.cards.any? ? available_plays(player.hand.cards)
                           : available_plays(player.face_up_cards)
  end

  private

  attr_reader :player, :pile

  def available_plays(cards)
    one_card_plays = cards.select { |card| can_play?(card) }
    multiple_card_plays(one_card_plays)
  end

  def can_play?(card)
    is_wild_card?(card) || can_play_normal_card?(card)
  end

  def is_wild_card?(card)
    Policies::IsWildCard.new(card).check?
  end

  def can_play_normal_card?(card)
    top_cards = pile.top_cards
    return true if top_cards.empty?
    card.rank >= top_cards.first.rank
  end

  def multiple_card_plays(one_card_plays)
    (1..Suit::ALL.size).map { |length| combinations(one_card_plays, length) }
                       .reduce(&:+)
                       .select { |cards| cards_have_the_same_rank?(cards) }
                       .group_by { |cards| cards.size }
  end

  def combinations(one_card_plays, number)
    one_card_plays.combination(number).to_a
  end

  def cards_have_the_same_rank?(cards)
    cards.map(&:rank).uniq.size == 1
  end
end
