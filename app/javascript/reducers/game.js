import { RECEIVE_INITIAL_STATE } from '../actions/shared'
import { SET_GAME_STATUS } from '../actions/game'

export function game (state = null, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return action.game
    case SET_GAME_STATUS:
      return { ...state, status: action.status }
    default:
      return state
  }
}
