import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Card from '../Card'
import playerChannel from '../../utils/playerChannel'

const MAX_CARDS = 3

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const SelectHandButton = styled.button`
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

class HandSelect extends Component {
  state = {
    selectedCards: []
  }

  toggleCard (id) {
    this.setState(({ selectedCards }) => {
      if (this.isSelected(id, selectedCards)) {
        return {
          selectedCards: selectedCards.filter(card => card !== id)
        }
      } else if (selectedCards.length < MAX_CARDS) {
        return {
          selectedCards: [ ...selectedCards, id ]
        }
      }
    })
  }

  isSelected (id, selectedCards = this.state.selectedCards) {
    return selectedCards.includes(id)
  }

  canSubmit () {
    return this.state.selectedCards.length === MAX_CARDS
  }

  submitHand = (e) => {
    e.preventDefault()

    playerChannel.selectHand(this.state.selectedCards)
  }

  render () {
    const { player } = this.props

    return (
      <Wrapper>
        { player.hand.map(card => this.renderCard(card)) }
        { player.faceUpCards.map(card => this.renderCard(card)) }
        <SelectHandButton disabled={!this.canSubmit()}
                          onClick={this.submitHand} >
         Select
        </SelectHandButton>
      </Wrapper>
    )
  }

  renderCard (card) {
    return (
      <Card key={card.id}
            card={card}
            onClick={this.toggleCard.bind(this, card.id)}
            isSelected={this.isSelected(card.id)} />
    )
  }
}

const mapStateToProps = ({ player }) => ({ player })

export default connect(mapStateToProps)(HandSelect)
