import { showLoading, hideLoading } from 'react-redux-loading-bar'
import api from '../utils/api'
import roomChannel from '../utils/roomChannel.js'
import playerChannel from '../utils/playerChannel.js'

export const LOAD_INITIAL_STATE = 'LOAD_INITIAL_STATE'
export const RECEIVE_INITIAL_STATE = 'RECEIVE_INITIAL_STATE'
export const PLAYER_MADE_PLAY = 'PLAYER_MADE_PLAY'
export const OPPONENT_MADE_PLAY = 'OPPONENT_MADE_PLAY'
export const PLAYER_PICKED_UP_PILE = 'PLAYER_PICKED_UP_PILE'
export const OPPONENT_PICKED_UP_PILE = 'OPPONENT_PICKED_UP_PILE'
export const PLAYER_FLIPPED_CARD = 'PLAYER_FLIPPED_CARD'
export const OPPONENT_FLIPPED_CARD = 'OPPONENT_FLIPPED_CARD'

export function authenticate (navigateToRoom) {
  return (dispatch) => {
    dispatch(showLoading())
    return api.authenticate()
      .then(response => {
        const { room } = response.data.data

        if (room) {
          navigateToRoom(room.slug)
        }
        dispatch(hideLoading())
      })
  }
}

export function receiveInitialState (state) {
  return { ...state, type: RECEIVE_INITIAL_STATE }
}

export function loadInitialState (returnToLoginUnlessGame) {
  return dispatch => {
    dispatch(showLoading())
    return api.getGame()
      .then(response => {
        const state = response.data.data
        const { game } = state

        if (!returnToLoginUnlessGame(game)) {
          dispatch(receiveInitialState(state))
          roomChannel.subscribe(action => dispatch(action))
          playerChannel.subscribe(action => dispatch(action))
          dispatch(hideLoading())
        }
      })
  }
}

export function leaveRoom (navigateToLogin) {
  return dispatch => {
    return api.leaveRoom()
      .then(response => {
        navigateToLogin()

        dispatch(receiveInitialState({
          room: null,
          player: null,
          opponents: [],
          game: null,
          deck: null,
          pile: null
        }))
      })
  }
}
