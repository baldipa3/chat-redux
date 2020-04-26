export default function(state = null, action) {
  switch (action.type) {
    case 'SET_CHANNEL': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
