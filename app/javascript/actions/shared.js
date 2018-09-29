import api from '../utils/api'
import { receiveRoom } from './room'
import { receivePlayer } from './player'
import { receiveOpponents } from './opponents'

export const LOAD_ROOM = 'LOAD_ROOM'

export function loadRoom (slug) {
  return (dispatch) => {
    return api.getRoom(slug)
      .then((response) => {
        const { room, player, opponents } = response.data.data

        console.log('room is received', room)

        dispatch(receiveRoom(room))
        dispatch(receivePlayer(player))
        dispatch(receiveOpponents(opponents))
      })
  }
}
