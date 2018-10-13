import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const MAX_CARDS = 3

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
    const { player, opponents } = this.props

    return (
      <Fragment>
        { player.hand.map(card => this.renderCard(card)) }
        { player.faceUpCards.map(card => this.renderCard(card)) }
      </Fragment>
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
