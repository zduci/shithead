import { setOpponentReady } from '../actions/opponents'

const roomChannel = {
  subscribe (room_slug, player_id, dispatch) {
    App.rooms = App.cable.subscriptions.create({
      channel: 'RoomsChannel',
      slug: room_slug,
      player_id: player_id }, {
      received: function(data) {
        dispatch(data.dispatchAction)
      }
    })
  },

  opponentIsReady (roomSlug, opponentId) {
    App.rooms.perform('player_is_ready', { slug: roomSlug, dispatchAction: setOpponentReady(opponentId) })
  }
}

export default roomChannel
