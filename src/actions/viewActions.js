const switchViewAction = (switchTo) => (dispatch) => {
  dispatch({
    type: 'SWITCH_VIEW',
    data: switchTo,
  });
};

export default switchViewAction