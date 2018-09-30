import { RECEIVE_ROOM } from '../actions/shared'

export function player (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ROOM:
      return action.player
    default:
      return state
  }
}
