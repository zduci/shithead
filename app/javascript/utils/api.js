import axios from 'axios'

export default {
  joinRoom: (room, player) => {
    return axios.post(
      'login.json',
      { room: room,
        player: player })
  },

  getRoom: slug => {
    return axios.get(`/rooms/${slug}.json`)
  }
}
