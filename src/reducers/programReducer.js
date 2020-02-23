const liveProgramReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_CURRENT_LIVE_PROGRAMS':
        console.log(action.data.data.schedule.map(s => s.channel.name))
        return action.data.data.schedule
      default:
        return state;
    }
  };
  
  export default liveProgramReducer;
  