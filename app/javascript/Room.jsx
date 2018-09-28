import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import api from 'utils/api'

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

export default class Room extends Component {
  state = {
    room: null,
    player: null,
    opponents: []
  }

  componentDidMount () {
    const { slug } = this.props.match.params
    api.getRoom(slug).then(response => {
      const { room, player, opponents } = response.data.data

      this.setState({
        room: room,
        player: player,
        opponents: opponents
      })
    })
  }

  render () {
    const { room, player, opponents } = this.state

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
