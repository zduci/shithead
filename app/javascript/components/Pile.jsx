import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const PileWrapper = styled.div`
  padding: 10px;
  margin: 6px;
  cursor: pointer;
  border: 3px solid;
  color: grey;
  border-radius: 4px;
  border-color: grey;
  max-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

function renderCard (card) {
  return (
    <Card key={card.id}
          card={card} />
  )
}

function Pile ({ size, topCards }) {
  return (
    <Wrapper>
      <PileWrapper>
        <p>Pile { size } cards</p>
      </PileWrapper>
      { topCards.map(card => renderCard(card)) }
    </Wrapper>
  )
}

export default Pile
