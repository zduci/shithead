require 'rails_helper'

describe Game do
  context 'associations' do
    it { is_expected.to belong_to(:room) }
    it { is_expected.to have_many(:players).dependent(:destroy) }
    it { is_expected.to belong_to(:player_turn) }
    it { is_expected.to belong_to(:winner) }
  end

  it 'sets the status to joining on create' do
    game = create(:game)
    expect(game).to be_joining
  end
end
