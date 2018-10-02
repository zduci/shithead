import axios from 'axios'

export default {
  authenticate: () => {
    return axios.get(
      '/login.json')
  },

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
