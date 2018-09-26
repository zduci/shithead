import React, { Component } from 'react'
import styled from 'styled-components'

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
  line-height: 1.42857143;
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

export default class Login extends Component {
  state = {
    name: '',
    room: ''
  }

  isButtonDisabled () {
    return !(this.state.name.length && this.state.room.length)
  }

  setName = event => this.setState({ name: event.target.value })
  setRoom = event => this.setState({ room: event.target.value })

  render () {
    return (
      <LoginForm>
        <h1>Shithead</h1>
        <label htmlFor='name'>
          Name:
        </label>
        <Input name='name'
               type='text'
               onChange={this.setName} />
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
