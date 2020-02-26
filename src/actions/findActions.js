import getByChannelAndDate from '../services/findService';

const getByChannelAndDateAction = (channelID, day, month) => async (dispatch) => {
  // Add the 0 in front of single digit days so the API call goes through
  let formattedDay = day;
  if (formattedDay.length === 1) formattedDay = '0'.concat(formattedDay);
  const date = `2020-${month}-${formattedDay}`;
  const data = await getByChannelAndDate(channelID, date);
  dispatch({
    type: 'GET_BY_CHANNEL_AND_DATE',
    data,
  });
};

export default getByChannelAndDateAction;
