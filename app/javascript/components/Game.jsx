import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Player from './Player'
import OpponentTop from './OpponentTop'
import Deck from './Deck'

const GameWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

class Game extends Component {
  render () {
    const { player, opponents, deck } = this.props
    const opponentTop = opponents[0]

    return (
      <GameWrapper>
        <OpponentTop opponent={opponentTop} />
        <Deck deck={deck} />
        <Player/>
      </GameWrapper>
    )
  }
}

const mapStateToProps = ({ player, opponents, deck }) => ({ player, opponents, deck })

export default connect(mapStateToProps)(Game)
