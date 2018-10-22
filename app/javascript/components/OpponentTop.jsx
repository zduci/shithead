import React, { Fragment } from 'react'
import HandSelect from './OpponentTop/HandSelect'
import Hand from './OpponentTop/Hand'
import FaceUpCards from './OpponentTop/FaceUpCards'
import FaceDownCards from './OpponentTop/FaceDownCards'

function OpponentTop ({ hasSelectedHand, faceUpCards, faceDownCards, hand }) {
  return (
    <div>
      { !hasSelectedHand && <HandSelect faceUpCards={faceUpCards}
                                        hand={hand} /> }
      { !hasSelectedHand && <FaceDownCards cards={faceDownCards} /> }
      { hasSelectedHand && <Hand number={hand.number} /> }
      { hasSelectedHand && <FaceUpCards cards={faceUpCards} /> }
    </div>
  )
}

export default OpponentTop
