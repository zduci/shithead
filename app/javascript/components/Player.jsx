import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import api from '../utils/api'
import HandSelect from './Player/HandSelect'
import Hand from './Player/Hand'
import FaceUpCards from './Player/FaceUpCards'
import FaceDownCards from './Player/FaceDownCards'

const LeaveButton = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${props => props.disabled ? 'green' : 'black'};
  border-color: ${props => props.disabled ? 'green' : 'black'};
  width: 70px;
`

class Player extends Component {
  renderFaceDownCards (hasSelectedHand, faceDownCards) {
    return (
      <Fragment>
        { !hasSelectedHand && <FaceDownCards cards={faceDownCards} /> }
      </Fragment>
    )
  }

  renderHandSelect (hasSelectedHand) {
    return (
      <Fragment>
        { !hasSelectedHand && <HandSelect/> }
      </Fragment>
    )
  }

  renderFaceUpCards (hasSelectedHand, faceUpCards, handHasCards) {
    return (
      <Fragment>
        { hasSelectedHand && <FaceUpCards canPlayCards={!handHasCards} cards={faceUpCards} /> }
      </Fragment>
    )
  }

  renderHand (hasSelectedHand, handHasCards) {
    return (
      <Fragment>
        { hasSelectedHand && handHasCards && <Hand/> }
      </Fragment>
    )
  }

  render () {
    const { hasSelectedHand, faceDownCards, faceUpCards, hand } = this.props
    const handHasCards = hand.length > 0
    const { leaveGame } = api

    return (
      <Fragment>
        { this.renderFaceDownCards(hasSelectedHand, faceDownCards) }
        { this.renderFaceUpCards(hasSelectedHand, faceUpCards, handHasCards) }
        { this.renderHandSelect(hasSelectedHand) }
        { this.renderHand(hasSelectedHand, handHasCards) }
        <LeaveButton onClick={leaveGame}>Leave</LeaveButton>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ player }) => ({ ...player })

export default connect(mapStateToProps)(Player)
