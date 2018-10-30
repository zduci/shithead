import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import CardBack from '../CardBack'
import playerChannel from '../../utils/playerChannel'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const FlipCardButton = styled.button`
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

class FaceDownCards extends Component {
  state = {
    selectedCard: null
  }

  toggleCard (index) {
    this.setState(({ selectedCard }) => {
      if (selectedCard == index) {
        return { selectedCard: null }
      } else {
        return { selectedCard: index }
      }
    })
  }

  range (n) {
    return [...Array(n).keys()]
  }

  renderCardBack (index) {
    const { selectedCard } = this.state
    const { isTurn } = this.props
    const onClick = isTurn ? this.toggleCard.bind(this, index)
                           : undefined

    return (
      <CardBack key={index}
      index={index}
            isSelected={selectedCard === index}
            onClick={onClick}
      />
    )
  }

  flipCard = () => {
    const { selectedCard } = this.state
    playerChannel.flipCard(selectedCard)
    this.setState({ selectedCard: null })
  }

  render () {
    const { cards, hand } = this.props
    const { number } = cards
    const { selectedCard } = this.state
    const showFlipCardButton = !hand.length && cards.number

    return (
      <Wrapper>
        { this.range(number).map(index => this.renderCardBack(index)) }
        { showFlipCardButton && <FlipCardButton disabled={selectedCard === null} onClick={this.flipCard}>Flip card</FlipCardButton> }
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ player, game }) => ({
  ...player,
  isTurn: game.playerTurnId === player.id
})

export default connect(mapStateToProps)(FaceDownCards)
