import { RECEIVE_PLAYER } from '../actions/player'

export function player (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PLAYER:
      return action.player
    default:
      return state
  }
}
