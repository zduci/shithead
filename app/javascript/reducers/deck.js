import { RECEIVE_INITIAL_STATE, PLAYER_MADE_PLAY,
         OPPONENT_MADE_PLAY  } from '../actions/shared'

export function deck (state = null, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return action.deck
    case PLAYER_MADE_PLAY:
      return action.deck
    case OPPONENT_MADE_PLAY:
      return action.deck
    default:
      return state
  }
}
