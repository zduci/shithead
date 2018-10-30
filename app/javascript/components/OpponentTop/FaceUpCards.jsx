import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import CardBack from '../CardBack'

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

function range (n) {
  return [...Array(n).keys()]
}


function renderCardBack (index) {
  return (
    <CardBack key={index} />
  )
}

function FaceUpCards ({ cards, faceDownCardsCount }) {
  const visibleFaceDownCards = faceDownCardsCount - cards.length
  const showFaceDownCards = visibleFaceDownCards > 0

  return (
    <Wrapper>
      { showFaceDownCards && range(visibleFaceDownCards).map(index => renderCardBack(index)) }
      { cards.reverse().map(card => renderCard(card)) }
    </Wrapper>
  )
}

export default FaceUpCards
