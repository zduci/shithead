require 'rails_helper'

describe Policies::IsWinner do
  context 'when player has no cards left' do
    let(:player) { create(:player,
                          hand: Hand.new,
                          face_up_cards: Set.new,
                          face_down_cards: Set.new) }

    it 'returns true' do
      expect(Policies::IsWinner.new(player).check?).to be true
    end
  end

  context 'when player has cards left' do
    let(:player) { create(:player,
                          hand: Hand.new,
                          face_up_cards: Set.new,
                          face_down_cards: Set.new([Card.new(Rank::FOUR,
                                                             Suit::HEARTS)])) }

    it 'returns false' do
      expect(Policies::IsWinner.new(player).check?).to be false
    end
  end
end
