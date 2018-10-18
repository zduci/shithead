import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../Card'

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

function FaceUpCards (props) {
  const { cards } = props

  return (
    <Wrapper>
      { cards.map(card => renderCard(card)) }
    </Wrapper>
  )
}

export default FaceUpCards
