import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { loadRoom } from '../actions/shared'

const RoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PlayerNames = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px;
  margin-bottom: 200px;
`

const PlayerName = styled.li`
  list-style: none;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  margin: 10px 0 10px 0;
  color: ${props => props.isPlayer && 'red'};
`

class Room extends Component {
  componentDidMount () {
    const { slug } = this.props.match.params
    const { dispatch } = this.props

    dispatch(loadRoom(slug))
  }

  render () {
    const { room, player, opponents } = this.props

    return (
      <Fragment>
        { room && <RoomWrapper>
            <h2>{room.name}</h2>
            <PlayerNames>
              <PlayerName key={player.id} isPlayer >
                {player.name}
              </PlayerName>
              { opponents.map(opponent =>
                  <PlayerName key={opponent.id} >
                    {opponent.name}
                  </PlayerName>
                )
              }
            </PlayerNames>
          </RoomWrapper>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Room)
