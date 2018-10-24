class RoomBroadcast
  def self.build(slug)
    new("rooms_#{slug}")
  end

  def initialize(room)
    @room = room
  end

  def add_opponent(opponent)
    broadcast_action(type: 'ADD_OPPONENT',
                     opponent: opponent)
  end

  def remove_opponent(opponent_id)
    broadcast_action(type: 'REMOVE_OPPONENT',
                     opponent_id: opponent_id)
  end

  def game_abandoned
    broadcast_action(type: 'GAME_ABANDONED')
  end

  def set_opponent_hand(opponent)
    broadcast_action(
      type: 'SET_OPPONENT_HAND',
      opponentId: opponent.id,
      hand: Serializers::HiddenCards.new(opponent.hand.cards).to_h,
      faceUpCards: Serializers::Cards.new(opponent.face_up_cards).to_a)
  end

  def rebroadcast(data)
    broadcast(data)
  end

  private

  attr_reader :room

  def broadcast_action(action)
    broadcast(dispatchAction: action)
  end

  def broadcast(data)
    ActionCable.server.broadcast(room, data)
  end
end
