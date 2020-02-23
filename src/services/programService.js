import axios from 'axios'

export const getLivePrograms = async () => {
    const url =  'https://rest-api.elisaviihde.fi/rest/epg/schedule/live'
    const response = await axios.get(url)
    return response
}
