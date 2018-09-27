import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from 'Login'
import Room from 'Room'
import styled from 'styled-components'

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`

export default App = props =>
  <Router>
    <AppWrapper>
      <Route path='/' exact component={Login} />
      <Route path='/rooms/:slug' exact component={Room} />
    </AppWrapper>
  </Router>
