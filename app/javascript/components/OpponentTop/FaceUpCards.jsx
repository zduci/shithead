import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import CardBack from '../CardBack'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

const CardWrapper = styled.div`
  margin: 10px;
`

function renderCard (card) {
  return (
    <CardWrapper>
      <Card key={card.id}
            card={card} />
    </CardWrapper>
  )
}

function range (n) {
  return [...Array(n).keys()]
}


function renderCardBack (index) {
  return (
    <CardWrapper>
      <CardBack key={index} />
    </CardWrapper>
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
