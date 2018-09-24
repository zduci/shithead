require 'rails_helper'

describe Room do
  context 'associations' do
    it { is_expected.to have_many(:games) }
  end
end
