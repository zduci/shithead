import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class HandSelect extends Component {
  render () {
    const { player, opponents } = this.props

    return (
      <Fragment>
        { player.hand.map(card => (
            <Card key={card.id}
                  card={card} />
          ))
        }
        { player.faceUpCards.map(card => (
            <Card key={card.id}
                  card={card} />
          ))
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ player }) => ({ player })

export default connect(mapStateToProps)(HandSelect)
