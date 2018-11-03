import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.img`
  margin: 6px;
  cursor: pointer;
  border: 2px solid;
  max-height: 120px;
  border-radius: 4px;
  border-color: white;
  border-color: ${props => props.isSelected && '#3df349'};
  background-color: white;
  background-color: ${props => props.isSelected && '#3df349'};
`

function imagePath ({ id }) {
  return `/assets/cards/${id}.svg`
}

export default function Card ({ card, onClick, isSelected }) {
  const { id, rank, suit } = card
  const src = imagePath(card)

  return (
    <CardWrapper className='card'
                 src={src}
                 isSelected={isSelected}
                 onClick={onClick} />
  )
}
