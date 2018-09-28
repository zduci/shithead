import React, { Component } from 'react'
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
    room: {},
    players: []
  }

  componentDidMount () {
    const { slug } = this.props.match.params
    api.getRoom(slug).then(response => {
      const { room, players, player_id } = response.data.data

      this.setState({
        room: room,
        players: players,
        player_id: player_id
      })
    })
  }

  render () {
    const { room, players, player_id } = this.state

    return (
      <RoomWrapper>
        <h2>{room.name}</h2>
        <PlayerNames>
          { players.map(player =>
              <PlayerName key={player.id} isPlayer={player.id == player_id} >
                {player.name}
              </PlayerName>
            )
          }
        </PlayerNames>
      </RoomWrapper>
    )
  }
}
