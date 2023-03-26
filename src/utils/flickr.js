import axios from 'axios';

const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;

export default axios.create({
  baseURL: 'https://api.flickr.com',
  params: {
    method: 'flickr.photos.search',
    per_page: 24,
    format: 'json',
    nojsoncallback: 1,
    api_key: API_KEY,
  },
});