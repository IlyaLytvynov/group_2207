import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';

import { Photo, Profile } from '../../models';
import { Image } from '../Image';

import styles from './App.styles';
import { ApiRequest } from '../../apis/ApiRequest';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';
import { Home } from '../Home';
import { Auth } from '../Auth';
import { Token } from '../../models/Auth';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '../../utils/storages';

interface State {
  photos: Array<Photo>;
  profile: Profile | undefined;
}

class App extends React.Component<WithStyles<typeof styles>, State> {
  public state = {
    photos: [],
    profile: undefined,
  };

  public render() {
    const { classes } = this.props;
    return <div className={ classes.root }>
      <Switch>
        <Route exact={ true } path={ '/' } render={ this.renderHome }/>
        <Route path={ '/auth' } render={ this.renderAuth }/>
        <Route path={ '/404' } render={ this.renderNotfound }/>
        <Route path={ '/*' } render={ this.renderRedirect }/>
      </Switch>
    </div>;
  }

  private renderNotfound = () => {
    return <h2>Not found!</h2>;
  };

  private renderRedirect = () => {
    return <Redirect to={ '/404' }/>;
  };

  private renderHome = (props: RouteComponentProps) => {
    return <Home { ...props }/>;
  };


  private renderAuth = (props: RouteComponentProps) => {
    return <Auth { ...props }/>;
  };


  private renderImages() {
    return this.state.photos.map(photo => <Image key={ Math.floor(Math.random() * 99999) } photo={ photo }/>);
  }

  private setPhotos = (photos: Array<Photo>) => {
    this.setState(state => ({ ...state, photos }));
  };

  private setProfile = (profile: Profile) => {
    this.setState(state => ({ ...state, profile }));
  };

  private fetchPhotos = async () => {
    // try {
    //   const photos = await ApiRequest.get<Array<Photo>>('/photos', { token: this.state.token.access_token });
    //   this.setPhotos(photos);
    // } catch (e) {
    //   throw e;
    // }
  };

  private fetchUserProfile = async () => {
    // try {
    //   const profile = await ApiRequest.get<Profile>('/me', { token: this.state.token.access_token });
    //   this.setProfile(profile);
    // } catch (e) {
    //   throw e;
    // }
  };

}

const WrappedApp = withStyles(styles)(App);

export { WrappedApp as App };
