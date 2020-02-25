const channelReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_ALL_CHANNELS':
        return action.data.data.channels
      default:
        return state;
    }
  };
  
  export default channelReducer;
  