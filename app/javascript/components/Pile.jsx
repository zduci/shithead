import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import CardPile from './CardPile'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
`

const TopCards = styled.div`
  margin: 6px;
`

function renderCard (card) {
  return (
    <Card key={card.id}
          card={card}
          fixed />
  )
}

function Pile ({ size, topCards }) {
  return (
    <Wrapper>
      <CardPile size={size} />
      <TopCards className="hand hhand-compact" >
        { topCards.map(card => renderCard(card)) }
      </TopCards>
    </Wrapper>
  )
}

export default Pile
