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
  token: Token | undefined;
  profile: Profile | undefined;
}

const STORAGE_KEY = 'TOKEN';

class App extends React.Component<WithStyles<typeof styles>, State> {
  public state = {
    photos: [],
    token: undefined,
    profile: undefined,
  };

  public componentWillMount = async () => {
    await this.readToken();
    await this.fetchUserProfile();
    await this.fetchPhotos();
  };

  public render() {
    const { classes } = this.props;
    return <div className={ classes.root }>
      <Switch>
        <Route exact={ true } path={ '/' } render={ (props: RouteComponentProps) => <Home
          { ...props }
          isSignedIn={ this.isSignedIn }
          profile={ this.state.profile }
          onSignOut={ this.signOut }/>
        }/>
        <Route path={ '/about' } render={ (props: RouteComponentProps) => <h1>{ props.location.pathname }</h1> }/>
        <Route path={ '/auth' } render={ this.renderAuth }/>
        <Route path={ '/404' } render={ () => <h2>Not found!</h2> }/>
        <Route path={ '/*' } render={ () => <Redirect to={ '/404' }/> }/>
      </Switch>
    </div>;
  }

  private get isSignedIn(): boolean {
    return !!this.state.token;
  }

  private signOut = () => {
    this.setState((state) => ({ ...state, token: undefined }));
    removeLocalStorage(STORAGE_KEY);
  };

  private renderAuth = (props: RouteComponentProps) => {
    return <Auth { ...props } onSuccess={ this.saveToken }/>;
  };

  private saveToken = (token: Token) => {
    this.setState((state: State) => ({ ...state, token }));
    setLocalStorage(STORAGE_KEY, JSON.stringify(token));
  };

  private renderImages() {
    return this.state.photos.map(photo => <Image key={ Math.floor(Math.random() * 99999) } photo={ photo }/>);
  }

  private setPhotos = (photos: Array<Photo>) => {
    this.setState(state => ({ ...state, photos }));
  };

  private readToken = async () => {
    const token = JSON.parse(getLocalStorage(STORAGE_KEY));
    await this.setState((state: State) => ({ ...state, token }));
  };

  private setProfile = (profile: Profile) => {
    console.log(profile);
    this.setState(state => ({ ...state, profile }));
  };

  private fetchPhotos = async () => {
    try {
      const photos = await ApiRequest.get<Array<Photo>>('/photos', { token: this.state.token.access_token });
      this.setPhotos(photos);
    } catch (e) {
      throw e;
    }
  };

  private fetchUserProfile = async () => {
    try {
      const profile = await ApiRequest.get<Profile>('/me', { token: this.state.token.access_token });
      this.setProfile(profile);
    } catch (e) {
      throw e;
    }

  };

}

const WrappedApp = withStyles(styles)(App);

export { WrappedApp as App };
