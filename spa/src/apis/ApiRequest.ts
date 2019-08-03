import axios from 'axios';
import { Photo } from '../models';

const key = process.env.REACT_APP_CLIENT_ID;
const apiUrl = process.env.REACT_APP_API_URL;

interface RequestOptions {
  isProtected?: boolean;
}

export class ApiRequest {
  public static get = async <T>(uri: string, options?: RequestOptions) => {
    try {
      const requestOptions = {
        headers: {
          Authorization: options && options.isProtected ? `` : `Client-ID ${ key }`
        }
      };

      const response = await axios.get<T>(apiUrl + uri, requestOptions);

      return response.data;
    } catch (e) {
      throw e;
    }
  }

  public static post = async <T>(uri: string, body: any, options?: RequestOptions) => {
    try {
      const requestOptions = {};

      const response = await axios.post<T>(apiUrl + uri, requestOptions);

      return response.data;
    } catch (e) {
      throw e;
    }
  }

}
