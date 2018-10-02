import { combineReducers } from 'redux'
import { room } from './room'
import { player } from './player'
import { opponents } from './opponents'
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'

export default combineReducers({
  room,
  player,
  opponents,
  loadingBar
})
