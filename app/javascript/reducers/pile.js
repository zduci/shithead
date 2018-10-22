import { RECEIVE_INITIAL_STATE } from '../actions/shared'

export function pile (state = null, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return action.pile
    default:
      return state
  }
}
