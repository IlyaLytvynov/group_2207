import axios from 'axios';
import configs from '../configs';

// https://unsplash.com/oauth/authorize?client_id=42f00e5ccf3bce6f62206323d3163d3b46ba5674d3196d610db0d2a08434ffd0&redirect_uri=http://localhost:3000/auth&response_type=code&scope=public

export interface FetchTokenResponse {
  access_token: string
  token_type: string
  refresh_token: string
  scope: string
  created_at: number
}


export const fetchAuthCode = () => {
  const requestConfig = {
    params: {
      client_id: configs.clientId,
      redirect_uri: 'http://localhost:3000/auth',
      response_type: 'code',
      scope: 'public+read_user'
    }
  };

  axios.get('https://unsplash.com/oauth/authorize', requestConfig);
};

export const fetchToken = async (code: string): Promise<FetchTokenResponse> => {
  const requestConfig = {
    params: {
      client_id: configs.clientId,
      client_secret: configs.clientSecret,
      redirect_uri: 'http://localhost:3000/auth',
      code,
      grant_type: 'authorization_code'
    }
  };

  const request = axios.create(requestConfig);

  const response = await request.post('https://unsplash.com/oauth/token');
  return response.data;
};
