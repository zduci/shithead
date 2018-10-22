import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
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

function Deck ({ deck }) {
  const { number } = deck

  return (
    <CardWrapper>
      <p>{ number }</p>
    </CardWrapper>
  )
}

export default Deck
