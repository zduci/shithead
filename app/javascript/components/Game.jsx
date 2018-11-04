import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Player from './Player'
import OpponentTop from './OpponentTop'
import Middle from './Middle'
import Deck from './Deck'
import Pile from './Pile'

const GameWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-width: 800px;
  min-height: 800px;
  justify-content: space-evenly;
`

class Game extends Component {
  render () {
    const { player, opponents, deck, pile, handHasCards } = this.props
    const opponentTop = opponents[0]

    return (
      <GameWrapper>
        <OpponentTop {...opponentTop} />
        <Middle deck={deck} pile={pile} />
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
