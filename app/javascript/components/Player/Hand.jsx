import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Card from '../Card'
import playerChannel from '../../utils/playerChannel'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

class Hand extends Component {
  render () {
    const { cards } = this.props

    return (
      <Wrapper>
        { cards.map(card => this.renderCard(card)) }
      </Wrapper>
    )
  }

  renderCard (card) {
    return (
      <Card key={card.id}
            card={card} />
    )
  }
}

const mapStateToProps = ({ player }) => ({ cards: player.hand })

export default connect(mapStateToProps)(Hand)
