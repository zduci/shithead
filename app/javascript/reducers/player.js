import { RECEIVE_INITIAL_STATE, PLAYER_MADE_PLAY, OPPONENT_MADE_PLAY,
         PLAYER_PICKED_UP_PILE, OPPONENT_PICKED_UP_PILE,
         PLAYER_FLIPPED_CARD } from '../actions/shared'
import { SET_PLAYER_READY } from '../actions/player'

export function player (state = null, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return action.player
    case PLAYER_MADE_PLAY:
      return action.player
    case OPPONENT_MADE_PLAY:
      return action.player
    case PLAYER_PICKED_UP_PILE:
      return action.player
    case OPPONENT_PICKED_UP_PILE:
      return action.player
    case PLAYER_FLIPPED_CARD:
      return action.player
    case SET_PLAYER_READY:
      return { ...state, isReady: true }
    default:
      return state
  }
}
