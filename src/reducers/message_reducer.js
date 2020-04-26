import { SET_CHANNEL, SET_MESSAGE, SET_MESSAGES } from '../actions'

export default function(state = null, action) {
  switch (action.type) {
    case SET_MESSAGE: {
      const newState = state.slice(0);
      newState.push(action.payload);
      return newState;
    }
    case SET_MESSAGES: {
      return action.payload.messages;
    }
    case SET_CHANNEL: {
      return [];
    }
    default:
      return state;
  }
}

