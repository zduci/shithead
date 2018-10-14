import { RECEIVE_INITIAL_STATE } from '../actions/shared'
import { SET_GAME_STATUS } from '../actions/game'

export function game (state = null, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return action.game
    default:
      return state
  }
}
