import { RECEIVE_INITIAL_STATE, OPPONENT_MADE_PLAY,
         OPPONENT_PICKED_UP_PILE } from '../actions/shared'
import { ADD_OPPONENT, REMOVE_OPPONENT,
         SET_OPPONENT_READY, SET_OPPONENT_HAND} from '../actions/opponents'

function setOpponentReady (state, action) {
  return state.map(function (opponent) {
     return opponent.id === action.opponent_id
       ? { ...opponent, isReady: true }
       : opponent
  })
}

function setOpponentHand (state, action) {
  return state.map(function (opponent) {
     return opponent.id === action.opponentId
       ? { ...opponent,
           faceUpCards: action.faceUpCards,
           hand: action.hand,
           hasSelectedHand: true }
       : opponent
  })
}

export function opponents (state = [], action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return action.opponents
    case OPPONENT_MADE_PLAY:
      return state.map(opponent => opponent.id === action.opponent.id ? action.opponent : opponent)
    case OPPONENT_PICKED_UP_PILE:
      return state.map(opponent => opponent.id === action.opponent.id ? action.opponent : opponent)
    case ADD_OPPONENT:
      return [ ...state, action.opponent ]
    case REMOVE_OPPONENT:
      return state.filter(opponent => opponent.id != action.opponent_id)
    case SET_OPPONENT_READY:
      return setOpponentReady(state, action)
    case SET_OPPONENT_HAND:
      return setOpponentHand(state, action)
    default:
      return state
  }
}
