const loadingCompleteAction = () => (dispatch) => {
  dispatch({
    type: 'LOADING_COMPLETE',
  });
};

export default loadingCompleteAction;
