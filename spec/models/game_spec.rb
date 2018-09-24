require 'rails_helper'

describe Game do
  context 'associations' do
    it { is_expected.to belong_to(:room) }
    it { is_expected.to have_many(:players) }
  end
end
