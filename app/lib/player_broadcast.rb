class PlayerBroadcast
  def initialize(players)
    @players = players
  end
  
  def receiveInitialState(game)
    players.each do |player|
      broadcast_action(
        channel_for(player),
        Serializers::Actions::ReceiveInitialState.new(player).to_h)
    end
  end

  private

  def channel_for(player)
    "player_#{player.id}"
  end

  private

  attr_reader :players

  def broadcast_action(channel, action)
    ActionCable.server.broadcast(channel, dispatchAction: action)
  end
end
