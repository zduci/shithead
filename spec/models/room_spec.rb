require 'rails_helper'

describe Room do
  context 'validations' do
    it { is_expected.to validate_presence_of(:name) }
  end

  context 'associations' do
    it { is_expected.to have_many(:games) }
  end

  it 'creates a new game on create' do
    room = Room.create!(name: 'kitchen')
    expect(room.game).to be_present
  end
end
