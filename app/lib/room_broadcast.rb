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

  def set_game_status(status)
    broadcast_action(type: 'SET_GAME_STATUS', status: status)
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
