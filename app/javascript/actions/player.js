export const RECEIVE_PLAYER = 'RECEIVE_PLAYER'

export function receivePlayer (player) {
  return {
    type: RECEIVE_PLAYER,
    player: player
  }
}
