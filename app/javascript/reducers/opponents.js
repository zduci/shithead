import { RECEIVE_OPPONENTS, ADD_OPPONENT } from '../actions/opponents'

export function opponents (state = [], action) {
  switch (action.type) {
    case RECEIVE_OPPONENTS:
      return action.opponents
    case ADD_OPPONENT:
      return [ ...state, action.opponent]
    default:
      return state
  }
}
