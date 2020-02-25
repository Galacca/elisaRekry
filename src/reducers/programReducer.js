const liveProgramReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_CURRENT_LIVE_PROGRAMS':
        return action.data.data.schedule
      default:
        return state;
    }
  };
  
  export default liveProgramReducer;
  