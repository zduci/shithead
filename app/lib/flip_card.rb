class FlipCard
  def initialize(player)
    @player = player
  end

  def flip(index)
    face_down_cards = player.face_down_cards.to_a
    return unless player.hand.empty? &&
                  player.face_up_cards.empty? &&
                  face_down_cards[index]
    player.hand = Hand.new([face_down_cards.slice!(index)])
    player.face_down_cards = Set.new(face_down_cards)
    player.save!
  end

  private

  attr_reader :player
end
