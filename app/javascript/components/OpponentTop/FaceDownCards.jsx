import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../Card'
import CardBack from '../CardBack'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

function range (n) {
  return [...Array(n).keys()]
}

function renderCardBack (id) {
  return (
    <CardBack key={id} />
  )
}

function FaceUpCards ({ cards }) {
  const { number } = cards

  return (
    <Wrapper>
      { range(number).map(index => renderCardBack(index)) }
    </Wrapper>
  )
}

export default FaceUpCards
