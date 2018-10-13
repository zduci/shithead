import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import HandSelect from './Player/HandSelect'

class Game extends Component {
  render () {
    const { player, opponents } = this.props

    return (
      <Fragment>
        { !player.haSelectedHand && <HandSelect/> }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ player }) => ({ player })

export default connect(mapStateToProps)(Game)
