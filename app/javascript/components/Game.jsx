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
    const { player, opponents, deck, pile, handHasCards } = this.props
    const opponentTop = opponents[0]

    return (
      <GameWrapper>
        <OpponentTop {...opponentTop} />
        <Deck {...deck} />
        <Pile {...pile} />
        <Player {...player} handHasCards={handHasCards} />
      </GameWrapper>
    )
  }
}

const mapStateToProps = ({ player, opponents, deck, pile }) => ({
  player,
  opponents,
  deck,
  pile,
  handHasCards: player.hand.length > 0
})

export default connect(mapStateToProps)(Game)
