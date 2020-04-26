import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';


class MessageList extends Component {
  constructor(props) {
    super(props);

    this.list = null;

    this.setListRef = element => {
      this.list = element;
    };

  this.focusList = () => {
      // Focus the text input using the raw DOM API
      if (this.list) this.list.focus();
    };
  }

  componentWillMount() {
    this.fetchMessages;
  }
  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 2000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render = () => {
    return (
      <div className='channel-container'>
        <div className="channel-title">
          <span>#{this.props.selectedChannel}</span>
        </div>
        <ul className="channel-content" ref={(list) => { this.list = list }}>
          {this.props.messages.map((message, index) => {
            return (
                <li key={index}>
                  <Message
                    author={message.author}
                    content={message.content}
                    date={message.created_at}
                  />
                </li>
            )
            })}
        </ul>
        <MessageForm/>
      </div>
    )
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
