require 'rails_helper'

describe PickUpPile do
  let(:card_one) { Card.new(Rank::SIX, Suit::CLUBS) }
  let(:card_two) { Card.new(Rank::ACE, Suit::SPADES) }
  let(:game) { create(:game, :playing, pile: Pile.new([card_two])) }
  let(:player) { create(:player,
                        game: game,
                        hand: Hand.new([card_one])) }
  before { game.update!(player_turn: player) }

  it 'moves the cards from the pile to hand' do
    PickUpPile.new(player).pick_up

    expect(game.pile.size).to eq(0)
    expect(player.hand.cards).to eq(Set.new([card_one, card_two]))
  end
end
