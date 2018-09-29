import { RECEIVE_ROOM } from '../actions/room'

export function room (state = null, action) {
  switch (action.type) {
    case RECEIVE_ROOM:
      return action.room
    default:
      return state
  }
}