const roomChannel = {
  subscribe (room_slug, player_id, dispatch) {
    App.rooms = App.cable.subscriptions.create({
      channel: 'RoomsChannel',
      slug: room_slug,
      player_id: player_id }, {
      received: function(data) {
        dispatch(data.action)
      }
    })
  }
}

export default roomChannel
