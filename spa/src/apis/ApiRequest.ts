import axios from 'axios';
import { Photo } from '../models';

const key = process.env.REACT_APP_CLIENT_ID;
const apiUrl = process.env.REACT_APP_API_URL;

interface RequestOptions {
  isProtected?: boolean;
}

export class ApiRequest {
  public static get = async (uri: string, options?: RequestOptions) => {
    try {
      const requestOptions = {
        headers: {
          Authorization: options && options.isProtected ? `` : `Client-ID ${ key }`
        }
      };

      const response = await axios.get<Array<Photo>>(apiUrl + uri, requestOptions);

      return response.data;
    } catch (e) {
      throw e;
    }

  }

}
