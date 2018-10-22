import { RECEIVE_INITIAL_STATE } from '../actions/shared'

export function deck (state = null, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return action.deck
    default:
      return state
  }
}
