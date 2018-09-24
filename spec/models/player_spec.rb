require 'rails_helper'

describe Player do
  context 'associations' do
    it { is_expected.to belong_to(:game) }
  end
end
