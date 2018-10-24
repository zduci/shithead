require 'rails_helper'

describe DrawCards do
  let(:game) { create(:game, :playing) }
  let(:hand) { Hand.new([Card.new(Rank::FOUR, Suit::HEARTS)]) }
  let(:player) { create(:player, hand: hand, game: game) }

  it 'draw cards from deck and adds them to player hand' do
    deck_size = game.deck.size

    DrawCards.new(player).draw

    expect(player.hand.size).to eq(DrawCards::MIN_HAND_SIZE)
    expect(game.deck.size).to eq(deck_size - 2)
  end

  context 'when the deck is empty' do
    let(:game) { create(:game, :playing, deck: Deck.new) }
    let(:player) { create(:player, hand: Hand.new, game: game) }

    it 'does not make any changes' do
      DrawCards.new(player).draw

      expect(player.hand).to be_empty
      expect(game.deck).to be_empty
    end
  end

  context 'when the player hand is full' do
    let(:hand) { Hand.new([Card.new(Rank::FOUR, Suit::HEARTS),
                           Card.new(Rank::FIVE, Suit::SPADES),
                           Card.new(Rank::SIX, Suit::CLUBS)]) }
    let(:player) { create(:player, hand: hand, game: game) }

    it 'does not make any changes if hand is full' do
      hand_size = hand.size
      deck_size = game.deck.size

      DrawCards.new(player).draw

      expect(player.hand.size).to eq(hand_size)
      expect(game.deck.size).to eq(deck_size)
    end
  end
end
