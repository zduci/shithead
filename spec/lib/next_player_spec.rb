require 'rails_helper'

describe NextPlayer do
  let(:game) { create(:game, :playing) }
  let!(:player_one) { create(:player, game: game) }
  let!(:player_two) { create(:player, game: game) }

  context 'player one is the current player' do
    before { game.update!(player_turn: player_one) }

    it 'returns player two' do
      expect(NextPlayer.new(game).get).to eq(player_two)
    end
  end


  context 'player two is the current player' do
    before { game.update!(player_turn: player_two) }

    it 'returns player one' do
      expect(NextPlayer.new(game).get).to eq(player_one)
    end
  end
end
