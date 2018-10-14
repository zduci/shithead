import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Card from '../Card'
import CardBack from '../CardBack'
import playerChannel from '../../utils/playerChannel'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

function renderCard (card) {
  return (
    <Card key={card.id}
          card={card} />
  )
}

function renderCardBack (id) {
  return (
    <CardBack key={id} />
  )
}

function range (n) {
  return [...Array(n).keys()]
}

function HandSelect ({ faceUpCards, hand }) {
  const handCards = range(hand.number)

  return (
    <Wrapper>
      { faceUpCards.reverse().map(card => renderCard(card)) }
      { handCards.map(index => renderCardBack(index)) }
    </Wrapper>
  )
}

const mapStateToProps = ({ player }) => ({ player })

export default HandSelect
