import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': '1da3d5abc7msh3f09df36934125cp13d5b5jsn22d7d2fe9f2d',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};


export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options);
        return response.data;
    }
}