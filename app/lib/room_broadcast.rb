class RoomBroadcast
  def initialize(slug)
    @room = "rooms_#{slug}"
  end

  def add_opponent(opponent)
    broadcast(type: 'ADD_OPPONENT',
              opponent: opponent)
  end

  def remove_opponent(opponent_id)
    broadcast(type: 'REMOVE_OPPONENT',
              opponent_id: opponent_id)
  end

  private

  attr_reader :room

  def broadcast(action)
    ActionCable.server.broadcast(room, dispatchAction: action)
  end
end
