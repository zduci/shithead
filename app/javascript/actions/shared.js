import api from '../utils/api'
import roomChannel from '../utils/roomChannel.js'

export const LOAD_ROOM = 'LOAD_ROOM'
export const RECEIVE_ROOM = 'RECEIVE_ROOM'

export function receiveRoom (room, player, opponents) {
  return {
   type: RECEIVE_ROOM,
   room: room,
   player: player,
   opponents: opponents
  }
}

export function loadRoom (slug) {
  return (dispatch) => {
    return api.getRoom(slug)
      .then((response) => {
        const { room, player, opponents } = response.data.data

        console.log('room is received', room)

        dispatch(receiveRoom(room, player, opponents))

        roomChannel.subscribe(room.slug, player.id, dispatch)
      })
  }
}

export function leaveRoom (history) {
  return (dispatch) => {
    return api.leaveRoom()
      .then((response) => {
        history.push('/')

        dispatch(receiveRoom(null))
        dispatch(receivePlayer(null))
        dispatch(receiveOpponents([]))
      })
  }
}
