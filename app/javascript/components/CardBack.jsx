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
`


export default function CardBack () {
  return (
    <CardWrapper>
      <p>Card Back</p>
    </CardWrapper>
  )
}
