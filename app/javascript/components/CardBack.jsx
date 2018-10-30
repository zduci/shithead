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
  border-color: ${props => props.isSelected && 'green'};
`

export default function CardBack ({ onClick, isSelected }) {
  return (
    <CardWrapper onClick={onClick}
                 isSelected={isSelected} >
      <p>Card Back</p>
    </CardWrapper>
  )
}
