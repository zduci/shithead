require 'spec_helper'
require_relative '../../../app/lib/rank'
require_relative '../../../app/lib/suit'
require_relative '../../../app/lib/card'
require_relative '../../../app/lib/policies/is_wild_card'

describe Policies::IsWildCard do
  context 'when card has rank 2' do
    it 'returns true' do
      expect(Policies::IsWildCard.new(
        Card.new(Rank::TWO, Suit::HEARTS)).check?).to be true
    end
  end

  context 'when card has rank 10' do
    it 'returns true' do
      expect(Policies::IsWildCard.new(
        Card.new(Rank::TEN, Suit::HEARTS)).check?).to be true
    end
  end

  context 'card is not wild card' do
    it 'returns false' do
      expect(Policies::IsWildCard.new(
        Card.new(Rank::FOUR, Suit::HEARTS)).check?).to be false
    end
  end
end
