// This reducer holds information wheter we succesfully loaded data or not

// Find is set to true so you can access the find form without getting stuck in a loading screen
// A if statement in the component handles the problem of react crashing when refreshing the page
// when no state has been initialized

const initialState = {
  'All channels': false,
  Find: true,
  'Currently live': false,
};

const loadingStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_COMPLETE':
      return Object.assign(state, { [action.data]: true });
    default:
      return state;
  }
};

export default loadingStateReducer;
