import { RECEIVE_ROOM } from '../actions/shared'
import { SET_PLAYER_READY } from '../actions/player'

export function player (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ROOM:
      return action.player
    case SET_PLAYER_READY:
      return { ...state, is_ready: true }
    default:
      return state
  }
}
