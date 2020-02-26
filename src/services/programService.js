import axios from 'axios';

const url = 'https://rest-api.elisaviihde.fi/rest/epg/schedule/live';

const getLivePrograms = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw new Error(`Unable to retrieve data from ${url}`);
  }
};

export default getLivePrograms;
