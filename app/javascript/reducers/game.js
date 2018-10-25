import { RECEIVE_INITIAL_STATE, PLAYER_MADE_PLAY, OPPONENT_MADE_PLAY,
         PLAYER_PICKED_UP_PILE, OPPONENT_PICKED_UP_PILE } from '../actions/shared'
import { SET_GAME_STATUS, GAME_ABANDONED } from '../actions/game'

export function game (state = null, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return action.game
    case PLAYER_MADE_PLAY:
      return action.game
    case OPPONENT_MADE_PLAY:
      return action.game
    case PLAYER_PICKED_UP_PILE:
      return action.game
    case OPPONENT_PICKED_UP_PILE:
      return action.game
    case GAME_ABANDONED:
      return { ...state, status: 'abandoned' }
    default:
      return state
  }
}
