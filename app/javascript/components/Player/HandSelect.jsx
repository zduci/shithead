import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Card from '../Card'

const MAX_CARDS = 3

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
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

  render () {
    const { player } = this.props

    return (
      <Wrapper>
        { player.hand.map(card => this.renderCard(card)) }
        { player.faceUpCards.map(card => this.renderCard(card)) }
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
