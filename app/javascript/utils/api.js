import axios from 'axios'

export default {
  joinRoom: (room, player) => {
    return axios.post(
      '/login.json',
      { room: room,
        player: player })
  },

  leaveRoom: () => {
    return axios.delete(
      '/login.json')
  },

  getGame: () => {
    return axios.get('/game.json')
  }
}
