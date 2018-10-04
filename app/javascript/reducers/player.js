import { RECEIVE_INITIAL_STATE } from '../actions/shared'
import { SET_PLAYER_READY } from '../actions/player'

export function player (state = null, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return action.player
    case SET_PLAYER_READY:
      return { ...state, isReady: true }
    default:
      return state
  }
}
