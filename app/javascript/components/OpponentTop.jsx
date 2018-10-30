import React, { Fragment } from 'react'
import HandSelect from './OpponentTop/HandSelect'
import Hand from './OpponentTop/Hand'
import FaceUpCards from './OpponentTop/FaceUpCards'
import FaceDownCards from './OpponentTop/FaceDownCards'

function OpponentTop ({ hasSelectedHand, faceUpCards, faceDownCards, hand }) {
  const showFaceDownCards = !hasSelectedHand || !faceUpCards.length

  return (
    <div>
      { !hasSelectedHand && <HandSelect faceUpCards={faceUpCards}
                                        hand={hand} /> }
      { hasSelectedHand && <Hand number={hand.number} /> }
      { showFaceDownCards && <FaceDownCards cards={faceDownCards} /> }
      { hasSelectedHand && <FaceUpCards cards={faceUpCards}
                                        faceDownCardsCount={faceDownCards.number} /> }
    </div>
  )
}

export default OpponentTop
