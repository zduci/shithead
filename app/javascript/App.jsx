import React from 'react'
import Login from 'Login'
import styled from 'styled-components'

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`

export default App = props => (
  <AppWrapper>
    <Login/>
  </AppWrapper>
)
