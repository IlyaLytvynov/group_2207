import axios from 'axios';
import configs from '../configs';

const request = axios.create({
  baseURL: configs.baseUrl,
  headers: {
    'Authorization': `Client-ID ${configs.clientId}`
  }
});

export default request
