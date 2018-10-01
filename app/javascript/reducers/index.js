import { combineReducers } from 'redux'
import { room } from './room'
import { player } from './player'
import { opponents } from './opponents'

export default combineReducers({
  room,
  player,
  opponents
})
