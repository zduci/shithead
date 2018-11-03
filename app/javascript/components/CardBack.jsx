import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.img`
  margin: 6px;
  cursor: pointer;
  border: 1px solid;
  max-height: 120px;
  border-radius: 4px;
  border-color: white;
  border-color: ${props => props.isSelected && '#3df349'};
  background-color: white;
  background-color: ${props => props.isSelected && '#3df349'};
`

export default function CardBack ({ onClick, isSelected }) {
  return (
    <CardWrapper className='card'
                 src={'/assets/cards/Blue_Back.svg'}
                 onClick={onClick}
                 isSelected={isSelected} />
  )
}
