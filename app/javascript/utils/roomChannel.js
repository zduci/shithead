import { setOpponentReady } from '../actions/opponents'

const roomChannel = {
  subscribe (onReceive) {
    App.rooms = App.cable.subscriptions.create({
      channel: 'RoomsChannel' }, {
      received: function(data) {
        onReceive(data.dispatchAction)
      }
    })
  },

  opponentIsReady (opponentId) {
    App.rooms.perform('player_is_ready', {
      dispatchAction: setOpponentReady(opponentId) })
  }
}

export default roomChannel
