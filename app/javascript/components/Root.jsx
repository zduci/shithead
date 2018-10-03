import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import LoadingBar from 'react-redux-loading-bar'
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

const StyledLoadingBar = styled(LoadingBar)`
  backgroundColor: 'black',
  height: '3px'
`

const Root = () => {
  return(
    <Fragment>
      <AppWrapper>
        <Route path='/' exact component={Login} />
        <Route path='/rooms/:slug' exact component={Room} />
      </AppWrapper>
    </Fragment>
  )
}

export default Root
