import { RECEIVE_INITIAL_STATE, PLAYER_MADE_PLAY,
         OPPONENT_MADE_PLAY  } from '../actions/shared'

export function pile (state = null, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_STATE:
      return action.pile
    case PLAYER_MADE_PLAY:
      return action.pile
    case OPPONENT_MADE_PLAY:
      return action.deck
    default:
      return state
  }
}
