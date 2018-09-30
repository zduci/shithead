import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { loadRoom, leaveRoom } from '../actions/shared'
import { receiveOpponents } from '../actions/opponents'
import { playerIsReady } from '../actions/player'

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
  margin-bottom: 40px;
`

const PlayerName = styled.li`
  list-style: none;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  margin: 10px 0 10px 0;
  color: ${props => props.isReady && 'green'};
`

const LeaveButton = styled.div`
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
  border-color: black;
  width: 60px;
`

const ReadyButton = styled(LeaveButton)`
  margin-bottom: 8px;
`

class Room extends Component {
  componentDidMount () {
    const { slug } = this.props.match.params
    const { dispatch } = this.props

    dispatch(loadRoom(slug))
  }

  handleLeaveRoom = () => {
    const { dispatch, history } = this.props

    dispatch(leaveRoom(history))
  }

  handlePlayerIsReady = () => {
    const { dispatch } = this.props

    dispatch(playerIsReady())
  }

  render () {
    const { room, player, opponents } = this.props
    const { handleLeaveRoom, handlePlayerIsReady } = this

    return (
      <Fragment>
        { room && <RoomWrapper>
            <h2>{room.name}</h2>
            <PlayerNames>
              <PlayerName key={player.id} isReady={player.is_ready} >
                { player.name }
              </PlayerName>
              { opponents.map(opponent =>
                  <PlayerName key={opponent.id} isReady={opponent.is_ready} >
                    { opponent.name }
                  </PlayerName>
                )
              }
            </PlayerNames>
            <ReadyButton onClick={handlePlayerIsReady}>Ready</ReadyButton>
            <LeaveButton onClick={handleLeaveRoom}>Leave</LeaveButton>
          </RoomWrapper>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Room)
