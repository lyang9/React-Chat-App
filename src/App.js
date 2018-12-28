import React, { Component } from 'react';
import './App.css';
import Chatkit from '@pusher/chatkit';

import MessageList from './components/MessageList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageList />
      </div>
    );
  }
}

export default App;