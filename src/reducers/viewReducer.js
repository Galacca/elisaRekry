const viewReducer = (state = 'Currently live', action) => {
    switch (action.type) {
      case 'SWITCH_VIEW':
        return action.data;
      default:
        return state;
    }
  };
  
  export default viewReducer;
 
