const findReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_BY_CHANNEL_AND_DATE':
      // Since search only allows for 1 channel to be searched at time hardcoding the [0] here is fine.
      return action.data.data.schedule[0].programs;
    default:
      return state;
  }
};

export default findReducer;
