import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Player from './Player'
import OpponentTop from './OpponentTop'
import Deck from './Deck'
import Pile from './Pile'

const GameWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

class Game extends Component {
  render () {
    const { player, opponents, deck, pile } = this.props
    const opponentTop = opponents[0]

    return (
      <GameWrapper>
        <OpponentTop {...opponentTop} />
        <Deck {...deck} />
        <Pile {...pile} />
        <Player/>
      </GameWrapper>
    )
  }
}

const mapStateToProps = ({ player, opponents, deck, pile }) => ({ player, opponents, deck, pile })

export default connect(mapStateToProps)(Game)
