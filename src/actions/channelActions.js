import getAllChannels from '../services/channelService';

const getAllChannelsAction = () => async (dispatch) => {
  const allChannelsData = await getAllChannels();
  dispatch({
    type: 'GET_ALL_CHANNELS',
    data: allChannelsData,
  });
  dispatch({
    type: 'LOADING_COMPLETE',
    data: 'All channels',
  });
};

export default getAllChannelsAction;
