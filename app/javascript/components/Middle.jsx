import React from 'react'
import styled from 'styled-components'
import Pile from './Pile'
import Deck from './Deck'
import CardPile from './CardPile'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: flex-start;
`;

function Middle ({ deck, pile }) {
  return (
    <Wrapper>
      <CardPile hidden />
      <Pile {...pile} />
      <Deck {...deck} />
    </Wrapper>
  )
}

export default Middle
