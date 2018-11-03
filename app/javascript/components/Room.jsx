import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { loadInitialState } from '../actions/shared'
import Game from '../components/Game'
import Lobby from '../components/Lobby'

class Room extends Component {
  noGame = game => !game || game.status === 'abandoned'

  returnToLogin = () => this.props.history.push('/')

  returnToLoginUnlessGame = game => this.noGame(game) && this.props.history.push('/')

  componentDidUpdate = () => this.returnToLoginUnlessGame(this.props.game)

  componentDidMount = () => this.props.dispatch(loadInitialState(this.returnToLoginUnlessGame))

  render () {
    const { game } = this.props
    const showLobby = game && game.status === 'joining'
    const showGame = game && ['playing', 'ended'].includes(game.status)

    return (
      <Fragment>
        { showLobby && <Lobby/> }
        { showGame && <Game/> }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ game }) => ({ game })

export default withRouter(connect(mapStateToProps)(Room))
