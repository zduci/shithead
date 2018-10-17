import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { loadInitialState } from '../actions/shared'
import Game from '../components/Game'
import Lobby from '../components/Lobby'

class Room extends Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(loadInitialState())
  }

  redirect_to_login_if_game_abandoned (game) {
    game && game.status == 'abandoned' && this.props.history.push('/')
  }

  componentDidUpdate () {
    this.redirect_to_login_if_game_abandoned(this.props.game)
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

export default withRouter(connect(mapStateToProps)(Room))
