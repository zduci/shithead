import { RECEIVE_ROOM } from '../actions/shared'
import { ADD_OPPONENT, REMOVE_OPPONENT } from '../actions/opponents'

export function opponents (state = [], action) {
  switch (action.type) {
    case RECEIVE_ROOM:
      return action.opponents
    case ADD_OPPONENT:
      return [ ...state, action.opponent ]
    case REMOVE_OPPONENT:
      return state.filter(opponent => opponent.id != action.opponent_id)
    default:
      return state
  }
}
