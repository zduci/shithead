export const RECEIVE_OPPONENTS = 'RECEIVE_OPPONENTS'

export function receiveOpponents (opponents) {
  return {
    type: RECEIVE_OPPONENTS,
    opponents: opponents
  }
}
