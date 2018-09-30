import { RECEIVE_ROOM } from '../actions/shared'
import { ADD_OPPONENT, REMOVE_OPPONENT,
         SET_OPPONENT_READY } from '../actions/opponents'

export function opponents (state = [], action) {
  switch (action.type) {
    case RECEIVE_ROOM:
      return action.opponents
    case ADD_OPPONENT:
      return [ ...state, action.opponent ]
    case REMOVE_OPPONENT:
      return state.filter(opponent => opponent.id != action.opponent_id)
    case SET_OPPONENT_READY:
      return state.map(opponent =>
        opponent.id === action.opponent_id ? { ...opponent, is_ready: true } : opponent)
    default:
      return state
  }
}
