import axios from 'axios'

export const getAllChannels = async () => {
    const url =  'https://rest-api.elisaviihde.fi/rest/epg/channels'
    const response = await axios.get(url)
    return response
}
