require 'rails_helper'

describe CheckForWinner do
  let(:game) { create(:game, :playing) }
  let!(:player) { create(:player,
                        game: game) }

  context 'there is a winner' do
    before do
      is_winner_policy = double(:is_winner_policy)
      expect(Policies::IsWinner).to receive(:new).and_return(is_winner_policy)
      expect(is_winner_policy).to receive(:check?).and_return(true)
    end

    it 'sets the winning player' do
      CheckForWinner.new(game).check

      expect(game.winner).to eq(player)
    end
  end

  context 'there is no winner' do
    before do
      is_winner_policy = double(:is_winner_policy)
      expect(Policies::IsWinner).to receive(:new).and_return(is_winner_policy)
      expect(is_winner_policy).to receive(:check?).and_return(false)
    end

    it 'sets the winning player' do
      CheckForWinner.new(game).check

      expect(game.winner).to eq(nil)
    end
  end
end
