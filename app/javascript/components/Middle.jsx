import React from 'react'
import styled from 'styled-components'
import Pile from './Pile'
import Deck from './Deck'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

function Middle ({ deck, pile }) {
  return (
    <Wrapper>
      <Deck {...deck} />
      <Pile {...pile} />
    </Wrapper>
  )
}

export default Middle
