import React from 'react'
import styled from 'styled-components'
import CardPile from './CardPile'

function Deck ({ number }) {
  return (
    <CardPile size={number} />
  )
}

export default Deck
