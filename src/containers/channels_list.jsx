import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions';

class ChannelsList extends Component {

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  };

  render = () => {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map((channel, index) => {
            return (
              <li
                key={index}
                onClick={ () => this.handleClick(channel) }
                className={channel === this.props.selectedChannel ? 'active' : null}
                role='presentation'
              >
                #{channel}
              </li>
            )
          })}
        </ul>
      </div>
    )
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel: selectChannel },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);
