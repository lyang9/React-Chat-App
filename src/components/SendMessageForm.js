import React, { Component } from 'react';

class SendMessageForm extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.sendMessage(this.state.message)
  }

  render() {
    return (
      <form 
        className='send-message-form'
        onSubmit={this.handleSubmit}
      >
        <input 
          type='text'
          placeholder='Type your message and hit ENTER'
          onChange={this.handleChange}
          value={this.state.message}
        />
      </form>
    );
  }
}

export default SendMessageForm;