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
      currentUser.subscribeToRoom({
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

  render() {
    // console.log('messages: ', this.state.messages);
    return (
      <div className="App">
        <MessageList messages={this.state.messages}/>
        <SendMessageForm />
      </div>
    );
  }
}

export default App;