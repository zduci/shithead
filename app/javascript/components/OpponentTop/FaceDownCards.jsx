import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import CardBack from '../CardBack'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

const CardWrapper = styled.div`
  margin: 10px;
`

function range (n) {
  return [...Array(n).keys()]
}

function renderCardBack (id) {
  return (
    <CardWrapper>
      <CardBack key={id} />
    </CardWrapper>
  )
}

function FaceDownCards ({ cards }) {
  const { number } = cards

  return (
    <Wrapper>
      { range(number).map(index => renderCardBack(index)) }
    </Wrapper>
  )
}

export default FaceDownCards
