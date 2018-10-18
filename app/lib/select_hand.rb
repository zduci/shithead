class SelectHand
  INITIAL_HAND_SIZE = 3

  def initialize(player)
    @player = player
    @cards = player.hand.cards + player.face_up_cards
  end

  def select(ids)
    selected_cards = find_selected_cards(ids)
    if selected_cards.size == INITIAL_HAND_SIZE
      player.hand = Hand.new(selected_cards)
      player.face_up_cards = find_other_cards(ids)
      player.has_selected_hand = true
      player.save!
    end
  end

  private

  attr_reader :player, :cards

  def find_selected_cards(ids)
    find_cards { |id| ids.include?(id) }
  end

  def find_other_cards(ids)
    find_cards { |id| !ids.include?(id) }
  end

  def find_cards
    Set.new(cards.select { |card| yield card.id })
  end
end
