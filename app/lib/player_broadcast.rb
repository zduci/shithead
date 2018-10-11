class PlayerBroadcast
  def initialize(players)
    @players = players
  end
  
  def receiveInitialState(game)
    players.each do |player|
      broadcast_action(channel_for(player),
                       type: 'RECEIVE_INITIAL_STATE',
                       player: Serializers::Player.new(player).to_h,
                       room: Serializers::Room.new(player.room).to_h,
                       game: Serializers::Game.new(player.game).to_h,
                       opponents: Serializers::Opponents.new(player.opponents).to_a,
                       deck: Serializers::HiddenCards.new(player.game.deck.cards).to_h)
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
