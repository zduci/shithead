import { RECEIVE_OPPONENTS } from '../actions/opponents'

export function opponents (state = [], action) {
  switch (action.type) {
    case RECEIVE_OPPONENTS:
      return action.opponents
    default:
      return state
  }
}
