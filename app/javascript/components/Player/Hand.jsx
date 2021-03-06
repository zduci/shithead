import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Card from '../Card'
import playerChannel from '../../utils/playerChannel'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`

const MakePlayButton = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${props => props.disabled ? 'grey' : 'green'};
  border-color: ${props => props.disabled ? 'grey' : 'green'};
  width: 70px;
  height: 50px;
`

const PickUpPileButton = styled(MakePlayButton)`
`

const HiddenButton = styled(MakePlayButton)`
  visibility: hidden;
`

class Hand extends Component {
  state = {
    selectedCards: []
  }

  canMakePlay () {
    return this.state.selectedCards.length > 0
  }

  possibleSelections () {
    const { availablePlays } = this.props
    const { selectedCards } = this.state
    const nextPlays = availablePlays[selectedCards.length + 1]
    if (nextPlays) {
      return nextPlays.map(cards => cards.filter(card => !selectedCards.includes(card.id)))
                      .filter(cards => cards.length === 1)
                      .map(cards => cards[0].id)
    } else {
      return []
    }
  }

  toggleSelectCard = (id, isSelected) => {
    this.setState(({ selectedCards }) => {
      if (isSelected) {
        return { selectedCards: selectedCards.filter(selectedCardId => selectedCardId !== id) }
      } else {
        return { selectedCards: [ ...selectedCards, id ] }
      }
    })
  }

  makePlay = () => {
    const { selectedCards } = this.state
    playerChannel.makePlay(selectedCards)
    this.setState({ selectedCards: [] })
  }

  pickUpPile = () => {
    playerChannel.pickUpPile()
  }

  render () {
    const { cards, availablePlays, isTurn, gameIsRunning } = this.props
    const { selectedCards } = this.state
    const possibleSelections = this.possibleSelections()
    const canPlaySomething = possibleSelections.length > 0 ||
                             selectedCards.length > 0

    return (
      <Wrapper>
        { gameIsRunning && isTurn && <HiddenButton /> }
        { this.renderCards(cards, possibleSelections, isTurn, gameIsRunning) }
        { gameIsRunning && isTurn && canPlaySomething && <MakePlayButton disabled={!this.canMakePlay()} onClick={this.makePlay}>Play</MakePlayButton> }
        { gameIsRunning && isTurn && !canPlaySomething && <PickUpPileButton onClick={this.pickUpPile}>Pick up</PickUpPileButton> }
      </Wrapper>
    )
  }

  renderCards (cards, possibleSelections, isTurn, gameIsRunning) {
    const isHandActive = gameIsRunning && isTurn

    return (
      <div className={`hand hhand-compact ${isHandActive && 'active-hand'}`} >
        { cards.map(card => this.renderCard(card, possibleSelections, isTurn, gameIsRunning)) }
      </div>
    )
  }

  renderCard (card, possibleSelections, isTurn, gameIsRunning) {
    const isSelected = this.state.selectedCards.includes(card.id)
    const canToggle = gameIsRunning && isTurn && (isSelected || possibleSelections.includes(card.id))
    const onClick = canToggle ? this.toggleSelectCard.bind(this, card.id, isSelected)
                              : undefined

    return (
      <Card key={card.id}
            card={card}
            isSelected={isSelected}
            onClick={onClick} />
    )
  }
}

const mapStateToProps = ({ player, game }) => ({
  cards: player.hand,
  availablePlays: player.availablePlays,
  isTurn: game.playerTurnId === player.id,
  gameIsRunning: game.status === 'playing'
})

export default connect(mapStateToProps)(Hand)
