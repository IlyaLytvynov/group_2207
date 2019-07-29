import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Photo } from '../../models';
import {Image} from '../Image';
const key = process.env.REACT_APP_CLIENT_ID;
const apiUrl = process.env.REACT_APP_API_URL;

interface State {
  photos: Array<Photo>;
}

export class App extends React.Component<{}, State> {
  public state = {
    photos: []
  };

  public componentWillMount(): void {
    console.log('WILL BE MOUNTED!');
  }

  public componentDidMount(): void {
    axios.get<Array<Photo>>(`${ apiUrl }/photos`, {
      headers: {
        Authorization: `Client-ID ${ key }`
      }
    }).then((resp: AxiosResponse<Array<Photo>>) => {
      console.log(resp);
      this.setPhotos(resp.data);
    });
  }

  public render() {
    return <div>
      {this.renderImages()}
    </div>;
  }

  private renderImages() {
    return this.state.photos.map(photo => <Image key={Math.floor(Math.random() * 99999)} photo={photo} />);
  }

  private setPhotos = (photos: Array<Photo>) => {
    this.setState(state => ({ ...state, photos }));
  };

}
