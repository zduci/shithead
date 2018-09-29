import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from '../components/Root'
import reducer from '../reducers'
import middleware from '../middleware'

const store = createStore(reducer, middleware)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Root/>
    </Provider>,
    document.getElementById('root')
  )
})
