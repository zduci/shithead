require 'rails_helper'

describe MakePlay do
  context 'when a player plays one regular card from hand' do
    let(:game) { create(:game, :playing) }
    let(:card) { Card.new(Rank::FOUR, Suit::HEARTS) }
    let(:hand) { Hand.new([card]) }
    let(:player) { create(:player, hand: hand, game: game) }
    before(:each) { game.update!(player_turn: player) }

    it 'the card goes on the pile' do
      MakePlay.new(player).play([card.id])

      expect(game.pile.top_cards).to eq(Set.new([card]))
    end

    let(:draw_cards) { double(:draw_cards) }

    it 'the player draws cards' do
      expect(DrawCards).to receive(:new).with(player).and_return(draw_cards)
      expect(draw_cards).to receive(:draw)

      MakePlay.new(player).play([card.id])
    end

    let(:next_player) { double(:next_player) }
    let(:player_turn) { create(:player, game: game) }

    it 'the player passed his turn' do
      expect(NextPlayer).to receive(:new).with(game).and_return(next_player)
      expect(next_player).to receive(:get).and_return(player_turn)

      MakePlay.new(player).play([card.id])

      expect(game.player_turn).to eq(player_turn)
    end
  end

  context 'when a player plays one regular card from face up cards' do
    let(:game) { create(:game, :playing) }
    let(:card) { Card.new(Rank::FOUR, Suit::HEARTS) }
    let(:face_up_cards) { Set.new([Card.new(Rank::FOUR, Suit::HEARTS)]) }
    let(:hand) { Hand.new }
    let(:player) { create(:player,
                          game: game,
                          hand: hand,
                          face_up_cards: face_up_cards) }
    before(:each) { game.update!(player_turn: player) }

    it 'the card goes on the pile' do
      MakePlay.new(player).play([card.id])

      expect(game.pile.top_cards).to eq(Set.new([card]))
    end

    let(:draw_cards) { double(:draw_cards) }

    it 'the player draws cards' do
      expect(DrawCards).to receive(:new).with(player).and_return(draw_cards)
      expect(draw_cards).to receive(:draw)

      MakePlay.new(player).play([card.id])
    end

    let(:next_player) { double(:next_player) }
    let(:player_turn) { create(:player, game: game) }

    it 'the player passed his turn' do
      expect(NextPlayer).to receive(:new).with(game).and_return(next_player)
      expect(next_player).to receive(:get).and_return(player_turn)

      MakePlay.new(player).play([card.id])

      expect(game.player_turn).to eq(player_turn)
    end
  end

  context 'when a player plays four of the same rank' do
    let(:game) { create(:game, :playing, pile: Pile.new([
      Card.new(Rank::FOUR, Suit::SPADES),
      Card.new(Rank::FOUR, Suit::DIAMONDS),
      Card.new(Rank::FOUR, Suit::CLUBS)
    ])) }
    let(:card) { Card.new(Rank::FOUR, Suit::HEARTS) }
    let(:hand) { Hand.new([card]) }
    let(:player) { create(:player, hand: hand, game: game) }
    before(:each) { game.update!(player_turn: player) }

    it 'the pile is burnt' do
      MakePlay.new(player).play([card.id])

      expect(game.pile).to be_empty
    end

    let(:draw_cards) { double(:draw_cards) }

    it 'the player draws cards' do
      expect(DrawCards).to receive(:new).with(player).and_return(draw_cards)
      expect(draw_cards).to receive(:draw)

      MakePlay.new(player).play([card.id])
    end

    it 'the player keeps his turn' do
      expect(NextPlayer).not_to receive(:new)

      MakePlay.new(player).play([card.id])

      expect(game.player_turn).to eq(player)
    end
  end

  context 'when a player plays a ten from hand' do
    let(:game) { create(:game, :playing, pile: Pile.new([
      Card.new(Rank::FOUR, Suit::SPADES),
      Card.new(Rank::FOUR, Suit::DIAMONDS),
      Card.new(Rank::FOUR, Suit::CLUBS)
    ])) }
    let(:card) { Card.new(Rank::TEN, Suit::CLUBS) }
    let(:hand) { Hand.new([card]) }
    let(:player) { create(:player, hand: hand, game: game) }
    before(:each) { game.update!(player_turn: player) }

    it 'the pile is burnt' do
      MakePlay.new(player).play([card.id])

      expect(game.pile).to be_empty
    end

    let(:draw_cards) { double(:draw_cards) }

    it 'the player draws cards' do
      expect(DrawCards).to receive(:new).with(player).and_return(draw_cards)
      expect(draw_cards).to receive(:draw)

      MakePlay.new(player).play([card.id])
    end

    it 'the player keeps his turn' do
      expect(NextPlayer).not_to receive(:new)

      MakePlay.new(player).play([card.id])

      expect(game.player_turn).to eq(player)
    end
  end
end
