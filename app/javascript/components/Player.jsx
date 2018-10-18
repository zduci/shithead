import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import api from '../utils/api'
import HandSelect from './Player/HandSelect'
import Hand from './Player/Hand'
import FaceUpCards from './Player/FaceUpCards'

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
  render () {
    const { player } = this.props
    const { leaveGame } = api

    return (
      <Fragment>
        { !player.hasSelectedHand && <HandSelect/> }
        { player.hasSelectedHand && <FaceUpCards cards={player.faceUpCards} /> }
        { player.hasSelectedHand && <Hand/> }
        <LeaveButton onClick={leaveGame}>Leave</LeaveButton>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ player }) => ({ player })

export default connect(mapStateToProps)(Player)
