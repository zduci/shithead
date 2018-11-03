class LoginsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

  def show
    player = Player.find_by(id: cookies.encrypted[:player_id])

    if player && player.game.abandoned?
      cookies.delete(:player_id)
      disconnect(player)
      render json: Serializers::Responses::State.new(nil).to_h
    else
      render json: Serializers::Responses::State.new(player).to_h
    end
  end

  def create
    room, player = JoinGame.in(room_name).add(player_name)

    cookies.encrypted[:player_id] = player.id

    broadcast_add_player(room, player)

    render json: Serializers::Responses::State.new(player).to_h
  rescue StandardError => e
    render json: Serializers::Responses::Error.new(e).to_h
  end

  def destroy
    player = Player.find_by(id: cookies.encrypted[:player_id])
    if player
      disconnect(player)
      slug = player.room.slug
      player.destroy!
      cookies.delete(:player_id)

      broadcast_remove_player(slug, player.id)
    end
    head :ok
  end

  private

  def room_name
    login_params[:room]
  end

  def player_name
    login_params[:player]
  end

  def login_params
    params.require(:login).permit(:player, :room)
  end

  def broadcast_add_player(room, player)
    RoomBroadcast.build(room.slug).add_opponent(player)
  end

  def broadcast_remove_player(slug, player_id)
    RoomBroadcast.build(slug).remove_opponent(player_id)
  end

  def disconnect(player)
    ActionCable.server.remote_connections
               .where(current_player: player)
               .disconnect
  end
end
