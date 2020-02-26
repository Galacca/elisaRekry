import getLivePrograms from '../services/programService';

const getLiveProgramsAction = () => async (dispatch) => {
  const liveProgramData = await getLivePrograms();
  dispatch({
    type: 'GET_CURRENT_LIVE_PROGRAMS',
    data: liveProgramData,
  });
  dispatch({
    type: 'LOADING_COMPLETE',
    data: 'Currently live',
  });
};

export default getLiveProgramsAction;
