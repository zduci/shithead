import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import Login from './Login'
import Room from './Room'

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`

const Root = () => {
  return(
    <AppWrapper>
      <Route path='/' exact component={Login} />
      <Route path='/rooms/:slug' exact component={Room} />
    </AppWrapper>
  )
}

export default Root
