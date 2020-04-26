import React, { Component } from 'react';
import { createMessage } from '../actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }


  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel,this.props.currentUsername,this.state.value);
    this.setState({value: ''});
  }

  render = () => {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" />
        </label>
        <button type="submit" value="Submit" className="btn-red">Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}

function mapStateToProps(state){
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
    currentUsername: state.currentUsername
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

