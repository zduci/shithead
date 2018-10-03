import { RECEIVE_INITIAL_STATE } from '../actions/shared'

export function game (state = null, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return action.game
    default:
      return state
  }
}
