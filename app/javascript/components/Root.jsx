import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Login from './Login'
import Room from './Room'
import { loadInitialState } from '../actions/shared'

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`

class Root extends Component {
  componentDidMount () {
    const { dispatch, history } = this.props

    dispatch(loadInitialState(history))
  }

  render () {
    return (
      <Fragment>
        <AppWrapper>
          <Route path='/' exact component={Login} />
          <Route path='/rooms/:slug' exact component={Room} />
        </AppWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = state => state

export default withRouter(connect(mapStateToProps)(Root))
