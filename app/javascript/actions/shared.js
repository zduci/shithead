import { showLoading, hideLoading } from 'react-redux-loading-bar'
import api from '../utils/api'
import roomChannel from '../utils/roomChannel.js'

export const LOAD_INITIAL_STATE = 'LOAD_INITIAL_STATE'
export const RECEIVE_INITIAL_STATE = 'RECEIVE_INITIAL_STATE'

export function authenticate (history) {
  return (dispatch) => {
    dispatch(showLoading())
    return api.authenticate()
      .then(response => {
        const { room } = response.data.data

        if (room) {
          history.push(`/rooms/${room.slug}`)
        }
        dispatch(hideLoading())
      })
  }
}

export function receiveInitialState (room, player, opponents) {
  return {
    type: RECEIVE_INITIAL_STATE,
    room: room,
    player: player,
    opponents: opponents
  }
}

export function loadInitialState () {
  return (dispatch) => {
    dispatch(showLoading())
    return api.getGame()
      .then(response => {
        const { room, player, opponents } = response.data.data

        dispatch(receiveInitialState(room, player, opponents))
        roomChannel.subscribe(action => dispatch(action))
        dispatch(hideLoading())
      })
  }
}

export function leaveRoom (history) {
  return (dispatch) => {
    return api.leaveRoom()
      .then((response) => {
        history.push('/')

        dispatch(receiveInitialState(null, null, []))
      })
  }
}
