class PlayerBroadcast
  def initialize(player)
    @player = player
  end
  
  def self.receiveInitialState(players)
    players.each do |player|
      new(player).receiveInitialState
    end
  end

  def receiveInitialState
    broadcast_action(
      channel_for(player),
      Serializers::Actions::ReceiveInitialState.new(player).to_h)
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
