import React, { Component } from 'react';
import './App.css';

import Chatkit from '@pusher/chatkit';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';

import { instanceLocator, tokenUrl } from './config';

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'admin',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser
      this.currentUser.subscribeToRoom({
        roomId: 19376371,
        hooks: {
          onNewMessage: message => {
            console.log('message.text: ', message.text);
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
    })
  }

  sendMessage() {
    this.currentUser.sendMessage({
      text,
      roomId: 19376371
    })
  }

  render() {
    // console.log('messages: ', this.state.messages);
    return (
      <div className="App">
        <MessageList messages={this.state.messages}/>
        <SendMessageForm sendMessage={this.sendMessage}/>
      </div>
    );
  }
}

export default App;