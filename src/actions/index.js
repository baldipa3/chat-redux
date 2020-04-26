// TODO: add and export your own actions
export const SET_CHANNEL = 'SET_CHANNEL';
export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_MESSAGE = 'SET_MESSAGE';

export function selectChannel(channel) {
  return {
    type: SET_CHANNEL,
    payload: channel
  };
}

export function fetchMessages(channel) {
  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then((data) => {
      return {
        type: SET_MESSAGES,
        payload: data
      };
    });
}

export function createMessage(channel, author, content) {
  const body = { author: author, content: content };
  const promise =  fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    heathers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then( r => r.json());
  return {
    type: SET_MESSAGE,
    payload: promise

  };
}
