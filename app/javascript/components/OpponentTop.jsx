import React, { Fragment } from 'react'
import HandSelect from './OpponentTop/HandSelect'
import Hand from './OpponentTop/Hand'

function OpponentTop (props) {
  const { hasSelectedHand, faceUpCards, hand } = props.opponent

  return (
    <div>
      { !hasSelectedHand && <HandSelect faceUpCards={faceUpCards}
                                        hand={hand} /> }
      { hasSelectedHand && <Hand hand={hand} /> }
    </div>
  )
}

export default OpponentTop
