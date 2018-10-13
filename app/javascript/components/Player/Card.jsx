import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  padding: 10px;
  margin: 6px;
  cursor: pointer;
  border: 1px solid;
  color: grey;
  border-radius: 4px;
  border-color: grey;
  border-color: ${props => props.isSelected && 'green'};
`

export default function Card ({ card }) {
  const { id, rank, suit } = card

  return (
    <CardWrapper
      <p>{rank}</p>
      <p>{suit}</p>
    </CardWrapper>
  )
}
