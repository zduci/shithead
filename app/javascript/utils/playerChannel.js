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
  }
}

export default playerChannel
