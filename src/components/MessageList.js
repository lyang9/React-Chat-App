import React, { Component } from 'react';

const DUMMY_DATA = [
  {
    senderId: 'admin',
    text: 'Hey, how is it going?'
  },
  {
    senderId: 'root',
    text: 'Great! How about you?'
  },
  {
    senderId: 'admin',
    text: 'Good to hear: I am great as well'
  }
]

class MessageList extends Component {
  render() {
    return (
      <div className='message-list'>
        {DUMMY_DATA.map((message, index) => {
          return (
              <div key={index} className='message'>
                <div className='message-username'>{message.senderId}</div>
                <div className='message-text'>{message.text}</div>
              </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;