const initialState = {
      'All channels': false,
      'Find': true,
      'Currently live': false,
}

const loadingStateReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOADING_COMPLETE':
        return Object.assign(state, {[action.data]: true}) 
      default:
        return state;
    }
  };
  
  export default loadingStateReducer;
  