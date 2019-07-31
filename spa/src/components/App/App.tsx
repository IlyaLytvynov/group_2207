import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import axios, { AxiosResponse } from 'axios';

import { Photo } from '../../models';
import { Image } from '../Image';

import styles from './App.styles';

const key = process.env.REACT_APP_CLIENT_ID;
const apiUrl = process.env.REACT_APP_API_URL;

interface State {
  photos: Array<Photo>;
}

class App extends React.Component<WithStyles<typeof styles>, State> {
  public state = {
    photos: []
  };

  public componentDidMount(): void {
    axios.get<Array<Photo>>(`${ apiUrl }/photos`, {
      headers: {
        Authorization: `Client-ID ${ key }`
      }
    }).then((resp: AxiosResponse<Array<Photo>>) => {
      this.setPhotos(resp.data);
    });
  }

  public render() {
    const {classes} = this.props;
    return <div className={classes.root}>
      { this.renderImages() }
    </div>;
  }

  private renderImages() {
    return this.state.photos.map(photo => <Image key={ Math.floor(Math.random() * 99999) } photo={ photo }/>);
  }

  private setPhotos = (photos: Array<Photo>) => {
    this.setState(state => ({ ...state, photos }));
  };

}

const WrappedApp = withStyles(styles)(App);

export { WrappedApp as App };
