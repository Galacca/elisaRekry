const findReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_BY_CHANNEL_AND_DATE':
        return action.data.data.schedule
      default:
        return state;
    }
  };
  
  export default findReducer;
  