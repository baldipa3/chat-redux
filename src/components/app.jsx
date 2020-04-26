import React from 'react';
import ChannelsList from '../containers/channels_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="../../assets/images/lewagon.png" alt=""/>
      </div>
        <ChannelsList/>
        <MessageList/>
      </div>
  );
};

export default App;
