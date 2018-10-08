class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from room
  end

  def player_is_ready(data)
    player = Player.find(data['dispatchAction']['opponent_id'])
    player.update(is_ready: true)
    if Policies::GameReadyToStart.new(player.game).check?
      player.game.playing!
    else
      ActionCable.server.broadcast(room, data)
    end
  end

  def unsubscribed
  end

  private

  def room
    "rooms_#{current_player.room.slug}"
  end
end
