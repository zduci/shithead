import { combineReducers } from 'redux'
import { room } from './room'
import { player } from './player'
import { opponents } from './opponents'
import { game } from './game'
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'

export default combineReducers({
  room,
  player,
  opponents,
  game,
  loadingBar
})
