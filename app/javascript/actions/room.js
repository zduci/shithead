export const RECEIVE_ROOM = 'RECEIVE_ROOM'

export function receiveRoom (room) {
  return {
    type: RECEIVE_ROOM,
    room: room
  }
}
