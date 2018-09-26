import React, { Component } from 'react'
import styled from 'styled-components'
import api from 'utils/api'

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 200px
`

const Input = styled.input`
  height: 18;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  margin: 10px 0 10px 0;
`

const PlayButton = styled.button`
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
  &.disabled {
    color: grey;
    border-color: grey;
  }
`

const Error = styled.div`
  font-size: 14px;
  color: red;
  margin-bottom: 10px;
`

export default class Login extends Component {
  state = {
    player: '',
    room: ''
  }

  isButtonDisabled () {
    return !(this.state.player.length && this.state.room.length)
  }

  setPlayer = event => this.setState({ player: event.target.value })
  setRoom = event => this.setState({ room: event.target.value })

  joinRoom = event => {
    event.preventDefault();

    api.joinRoom(this.state.room, this.state.player).then(response => {
      if (response.data.success === true) {
      } else {
        this.setState({
          error: response.data.messages
        })
      }
    })
  }

  render () {
    return (
      <LoginForm onSubmit={this.joinRoom} >
        <h1>Shithead</h1>
        <Error>{this.state.error}</Error>
        <label htmlFor='player'>
          Player:
        </label>
        <Input name='player'
               type='text'
               onChange={this.setPlayer} />
        <label htmlFor='room'>
          Room:
        </label>
        <Input name='room'
               type='text'
               onChange={this.setRoom} />
        <PlayButton disabled={!this.isButtonDisabled}
                    className={this.isButtonDisabled() && 'disabled' } >
          Play
        </PlayButton>
      </LoginForm>
    )
  }
}
