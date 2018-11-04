import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Card from '../Card'
import CardBack from '../CardBack'
import playerChannel from '../../utils/playerChannel'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

const CardWrapper = styled.div`
  margin: 10px;
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
`

const PickUpPileButton = styled(MakePlayButton)`
`

const FACE_DOWN_CARDS = 3

class FaceUpCards extends Component {
  state = {
    selectedCard: null
  }

  canMakePlay () {
    return this.state.selectedCard
  }

  possibleSelections () {
    const availablePlays = this.props.availablePlays[1] || []
    return availablePlays.map(([ card ]) => card.id)
  }

  toggleSelectCard = (id) => {
    this.setState(({ selectedCard }) => {
      if (selectedCard === id) {
        return { selectedCard: null }
      } else {
        return { selectedCard: id }
      }
    })
  }

  makePlay = () => {
    const { selectedCard } = this.state
    playerChannel.makePlay([selectedCard])
    this.setState({ selectedCard: null })
  }

  pickUpPile = () => {
    playerChannel.pickUpPile()
  }

  renderCard (card, possibleSelections) {
    const { handHasCards, isTurn } = this.props
    const canToggle = isTurn && !handHasCards && possibleSelections.includes(card.id)
    const onClick = canToggle ? this.toggleSelectCard.bind(this, card.id)
                              : undefined
    const isSelected = this.state.selectedCard === card.id

    return (
      <CardWrapper>
        <Card key={card.id}
              card={card}
              isSelected={isSelected}
              onClick={onClick} />
      </CardWrapper>
    )
  }

  range (n) {
    return [...Array(n).keys()]
  }

  renderCardBack (index) {
    const { selectedCard } = this.state

    return (
      <CardWrapper>
        <CardBack key={index}
                  index={index} />
      </CardWrapper>
    )
  }

  renderFaceUpCards (possibleSelections) {
    const { cards } = this.props

    return (
      <Fragment>
        { cards.map(card => this.renderCard(card, possibleSelections)) }
      </Fragment>
    )
  }

  renderFaceDownCards () {
    const { cards, faceDownCardsCount } = this.props
    const showFaceDownCards = faceDownCardsCount > 0
    const visibleFaceDownCards = faceDownCardsCount - cards.length

    return (
      <Fragment>
        { showFaceDownCards && this.range(visibleFaceDownCards).map(index => this.renderCardBack(index)) }
      </Fragment>
    )
  }

  renderMakePlayButton (canPlaySomething) {
    const { isTurn, handHasCards } = this.props
    const showMakePlay = isTurn === true && !handHasCards && canPlaySomething

    return (
      <Fragment>
        { showMakePlay && <MakePlayButton disabled={!this.canMakePlay()} onClick={this.makePlay}>Play</MakePlayButton> }
      </Fragment>
    )
  }

  renderPickUpButton (canPlaySomething) {
    const { isTurn, handHasCards } = this.props
    const showPickUp = isTurn === true && !handHasCards && !canPlaySomething

    return (
      <Fragment>
        { showPickUp && <PickUpPileButton onClick={this.pickUpPile}>Pick up</PickUpPileButton> }
      </Fragment>
    )
  }

  render () {
    const possibleSelections = this.possibleSelections()
    const canPlaySomething = possibleSelections.length > 0 || this.state.selectedCard

    return (
      <Wrapper>
        { this.renderFaceUpCards(possibleSelections) }
        { this.renderFaceDownCards() }
        { this.renderMakePlayButton(canPlaySomething) }
        { this.renderPickUpButton(canPlaySomething) }
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ player, game }) => ({
  cards: player.faceUpCards,
  availablePlays: player.availablePlays,
  isTurn: game.playerTurnId === player.id,
  handHasCards: player.hand.length > 0,
  faceDownCardsCount: player.faceDownCards.number
})

export default connect(mapStateToProps)(FaceUpCards)
