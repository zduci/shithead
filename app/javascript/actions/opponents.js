export const ADD_OPPONENT = 'ADD_OPPONENT'
export const REMOVE_OPPONENT = 'REMOVE_OPPONENT'

export function addOpponent (opponent) {
  return {
    type: ADD_OPPONENT,
    opponent: opponent
  }
}

export function removeOpponent (opponent_id) {
  return {
    type: REMOVE_OPPONENT,
    opponent_id: opponent_id
  }
}
