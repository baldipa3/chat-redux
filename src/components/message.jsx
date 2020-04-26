import React, { Component } from 'react';
import {emojify} from 'react-emojione';


function strToRBG(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
      console.log(c)
    return `#${"00000".substring(0, 6 - c.length)}${c}`;
}

class Message extends Component {

  render = () => {
    const time = new Date(this.props.date).toLocaleTimeString();
    return(
      <div className="message-container">
        <i className="author">
          <span style={{ color: strToRBG(this.props.author) }}>{this.props.author}</span>
          <small>{time}</small>
        </i>
        <p>{emojify(this.props.content)}</p>
      </div>
    );
  }
}

export default Message;
