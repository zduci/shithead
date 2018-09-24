import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const App = props => (
  <h1>Shithead</h1>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('root'),
  )
})
