const findReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_BY_CHANNEL_AND_DATE':
        const mappedData = action.data.data.schedule.map(r => r.programs);
        const sortedData = (mappedData.sort(mappedData.startTime))
        return sortedData
      default:
        return state;
    }
  };
  
  export default findReducer;
  