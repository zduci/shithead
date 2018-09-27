require 'rails_helper'

describe Player do
  context 'associations' do
    it { is_expected.to belong_to(:game) }
  end

  context 'validations' do
    it { should validate_uniqueness_of(:name).scoped_to(:game_id) }
  end
end
