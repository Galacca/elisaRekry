import axios from 'axios';

const url = 'https://rest-api.elisaviihde.fi/rest/epg/channels';

const getAllChannels = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch {
    throw new Error(`Unable to retrieve data from ${url}`);
  }
};

export default getAllChannels;
