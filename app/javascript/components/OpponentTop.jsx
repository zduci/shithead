import React from 'react'
import styled from 'styled-components'
import HandSelect from './OpponentTop/HandSelect'
import Hand from './OpponentTop/Hand'
import FaceUpCards from './OpponentTop/FaceUpCards'
import FaceDownCards from './OpponentTop/FaceDownCards'

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  color: ${props => props.isTurn ? 'green' : 'black'};
`

function OpponentTop ({ name, hasSelectedHand, faceUpCards, faceDownCards, hand, isTurn }) {
  const showFaceDownCards = !hasSelectedHand || !faceUpCards.length
  const showFaceUpCards = hasSelectedHand && faceUpCards.length > 0

  return (
    <div>
      <Header isTurn={isTurn} >
        <p>{name}</p>
      </Header>
      { !hasSelectedHand && <HandSelect faceUpCards={faceUpCards}
                                        hand={hand} /> }
      { hasSelectedHand && <Hand number={hand.number} /> }
      { showFaceDownCards && <FaceDownCards cards={faceDownCards} /> }
      { showFaceUpCards && <FaceUpCards cards={faceUpCards}
                                        faceDownCardsCount={faceDownCards.number} /> }
    </div>
  )
}

export default OpponentTop
