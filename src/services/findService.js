import axios from 'axios'

export const getByChannelAndDate = async (channelID, date) => {
    const url = `https://rest-api.elisaviihde.fi/rest/epg/schedule?channelId=${channelID}&date=${date}`
    const response = await axios.get(url)
    return response
}
