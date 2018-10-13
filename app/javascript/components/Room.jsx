import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { loadInitialState } from '../actions/shared'
import Game from '../components/Game'
import Lobby from '../components/Lobby'

class Room extends Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(loadInitialState())
  }

  render () {
    const { game } = this.props

    return (
      <Fragment>
        { game && game.status === 'joining' && <Lobby/> }
        { game && game.status === 'playing' && <Game/> }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ game }) => ({ game })

export default connect(mapStateToProps)(Room)
