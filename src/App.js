import React, { Component } from 'react';
import './App.css';

import Chatkit from '@pusher/chatkit';
import MessageList from './components/MessageList';

import { instanceLocator, tokenUrl } from './config';

class App extends Component {

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
          }
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <MessageList />
      </div>
    );
  }
}

export default App;