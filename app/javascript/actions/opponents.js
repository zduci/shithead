export const RECEIVE_OPPONENTS = 'RECEIVE_OPPONENTS'
export const ADD_OPPONENT = 'ADD_OPPONENT'

export function receiveOpponents (opponents) {
  return {
    type: RECEIVE_OPPONENTS,
    opponents: opponents
  }
}

export function addOpponent (opponent) {
  return {
    type: ADD_OPPONENT,
    opponent: opponent
  }
}
