import React, { Component } from 'react'
import styled from 'styled-components'
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

function Hand ({ number }) {
  const handCards = range(number)

  return (
    <Wrapper>
      <div className='hand hhand-compact' >
        { handCards.map(index => renderCardBack(index)) }
      </div>
    </Wrapper>
  )
}

export default Hand
