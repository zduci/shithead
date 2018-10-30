require 'rails_helper'

describe FlipCard do
  let(:card_one) { Card.new(Rank::SIX, Suit::CLUBS) }
  let(:card_two) { Card.new(Rank::ACE, Suit::SPADES) }
  let(:player) { create(:player,
                        hand: Hand.new,
                        face_up_cards: Set.new,
                        face_down_cards: Set.new([card_one, card_two])) }

  it 'moves a card from face down cards to hand' do
    FlipCard.new(player).flip(1)

    expect(player.face_down_cards).to eq(Set.new([card_one]))
    expect(player.hand.cards).to eq(Set.new([card_two]))
  end
end
