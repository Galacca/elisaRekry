import axios from 'axios';

const getByChannelAndDate = async (channelID, date) => {
  try {
    const url = `https://rest-api.elisaviihde.fi/rest/epg/schedule?channelId=${channelID}&date=${date}`;
    const response = await axios.get(url);
    return response;
  } catch {
    throw new Error('Unable to retrieve data from '.concat(`https://rest-api.elisaviihde.fi/rest/epg/schedule?channelId=${channelID}&date=${date}`));
  }
};

export default getByChannelAndDate;
