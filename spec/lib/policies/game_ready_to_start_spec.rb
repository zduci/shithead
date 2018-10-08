require 'rails_helper'

describe Policies::GameReadyToStart do
  context 'there are 2 players or more' do
    let(:game) {  create(:game, players: [build(:player), build(:player)]) }

    it 'returns true if all players are ready' do
      game.players.first.update(is_ready: true)
      game.players.second.update(is_ready: true)

      expect(Policies::GameReadyToStart.new(game).check?).to be true
    end

    it 'returns false unless all players are ready' do
      game.players.first.update(is_ready: false)

      expect(Policies::GameReadyToStart.new(game).check?).to be false
    end
  end

  context 'there are less than 2 players' do
    let(:game) {  create(:game, players: [build(:player)]) }

    it 'returns false' do
      expect(Policies::GameReadyToStart.new(game).check?).to be false
    end
  end
end
