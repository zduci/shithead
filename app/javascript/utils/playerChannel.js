const playerChannel = {
  subscribe (onReceive) {
    App.player = App.cable.subscriptions.create({
      channel: 'PlayerChannel' }, {
      received: function(data) {
        onReceive(data.dispatchAction)
      },
      disconnected: function () {
        App.cable.subscriptions.remove(this)
      }
    })
  },

  selectHand (cards) {
    App.player.perform('select_hand', {
      cards: cards })
  }
}

export default playerChannel
