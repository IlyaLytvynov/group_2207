import axios from 'axios';

export class ApiRequest {
  public static get = async <T>(uri: string) => {
    try {
      const requestOptions = {
        headers: {
          Authorization: 'Client-ID 588745fe0494eda1c54354b97d7885c5f94a97a359ce835605acf2df6163ba8c'
        }
      };

      const response = await axios.get<T>('https://api.unsplash.com' + uri, requestOptions);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

}
