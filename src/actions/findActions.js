import { getByChannelAndDate } from '../services/findService'

const getByChannelAndDateAction = (channelID, day, month) => async (dispatch) => {
  const zero = "0"
  let formattedDay = day
  if(formattedDay.length === 1) formattedDay = zero.concat(formattedDay)
  const date = `2020-${month}-${formattedDay}`
  const data = await getByChannelAndDate(channelID, date);
  dispatch({
    type: 'GET_BY_CHANNEL_AND_DATE',
    data: data,
  });
};

export default getByChannelAndDateAction;
