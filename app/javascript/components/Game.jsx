import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Player from './Player'
import OpponentTop from './OpponentTop'

const GameWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

class Game extends Component {
  render () {
    const { player, opponents } = this.props
    const opponentTop = opponents[0]

    return (
      <GameWrapper>
        <OpponentTop opponent={opponentTop}/>
        <Player/>
      </GameWrapper>
    )
  }
}

const mapStateToProps = ({ player, opponents }) => ({ player, opponents })

export default connect(mapStateToProps)(Game)
