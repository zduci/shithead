import roomChannel from '../utils/roomChannel'

export const SET_PLAYER_READY = 'SET_PLAYER_READY'

export function setPlayerReady () {
  return {
    type: SET_PLAYER_READY
  }
}

export function playerIsReady () {
  return (dispatch, getState) => {
    const { room, player } = getState()

    roomChannel.opponentIsReady(room.slug, player.id)
    dispatch(setPlayerReady())
  }
}
