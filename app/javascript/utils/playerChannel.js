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
  },

  makePlay (cards) {
    App.player.perform('make_play', {
      cards: cards })
  },

  pickUpPile () {
    App.player.perform('pick_up_pile')
  },

  flipCard (card) {
    App.player.perform('flip_card', {
      card: card })
  }
}

export default playerChannel
