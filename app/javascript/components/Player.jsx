import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import HandSelect from './Player/HandSelect'

function Player (props) {
  const { player } = props

  return (
    <Fragment>
      { !player.haSelectedHand && <HandSelect/> }
    </Fragment>
  )
}

const mapStateToProps = ({ player }) => ({ player })

export default connect(mapStateToProps)(Player)
