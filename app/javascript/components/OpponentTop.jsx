import React, { Fragment } from 'react'
import HandSelect from './OpponentTop/HandSelect'
import Hand from './OpponentTop/Hand'
import FaceUpCards from './OpponentTop/FaceUpCards'

function OpponentTop (props) {
  const { hasSelectedHand, faceUpCards, hand } = props.opponent

  return (
    <div>
      { !hasSelectedHand && <HandSelect faceUpCards={faceUpCards}
                                        hand={hand} /> }
      { hasSelectedHand && <Hand hand={hand} /> }
      { hasSelectedHand && <FaceUpCards cards={faceUpCards} /> }
    </div>
  )
}

export default OpponentTop
