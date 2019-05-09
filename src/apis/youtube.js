import axios from 'axios';

const KEY = 'AIzaSyAzt1gymgwjrcrasiduSVb6_Z05PMSqBG4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});