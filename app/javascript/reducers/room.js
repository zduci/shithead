import { RECEIVE_INITIAL_STATE } from '../actions/shared'

export function room (state = null, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return action.room
    default:
      return state
  }
}
