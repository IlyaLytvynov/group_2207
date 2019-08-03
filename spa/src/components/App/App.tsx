import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';

import { Photo } from '../../models';
import { Image } from '../Image';

import styles from './App.styles';
import { ApiRequest } from '../../apis/ApiRequest';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';
import { Home } from '../Home';
import { Link } from 'react-router-dom';
import { Auth } from '../Auth';
import { Token } from '../../models/Auth';
import { getLocalStorage, setLocalStorage } from '../../utils/storages';

interface State {
  photos: Array<Photo>;
  token: Token;
}

const STORAGE_KEY = 'TOKEN';

class App extends React.Component<WithStyles<typeof styles>, State> {
  public state = {
    photos: [],
    token: undefined,
  };

  public componentWillMount = async () => {
    this.readToken();
    try {
      const photos = await ApiRequest.get<Array<Photo>>('/photos');
      this.setPhotos(photos);
    } catch (e) {
      throw e;
    }
  };

  public render() {
    const { classes } = this.props;
    return <div className={ classes.root }>
      <Switch>
        <Route exact={ true } path={ '/' } render={ (props: RouteComponentProps) => <Home {...props} isSignedIn={this.isSignedIn}/>}/>
        <Route path={ '/about' } render={ (props: RouteComponentProps) => <h1>{props.location.pathname}</h1> }/>
        <Route path={ '/auth' } render={ this.renderAuth }/>
        <Route path={'/404'} render={() => <h2>Not found!</h2>} />
        <Route path={ '/*' } render={() => <Redirect to={'/404'} />}/>
      </Switch>
    </div>;
  }

  private get isSignedIn(): boolean {
    return !!this.state.token;
  }

  private renderAuth = (props: RouteComponentProps) => {
    return <Auth {...props} onSuccess={this.saveToken}/>;
  };

  private saveToken = (token: Token) => {
    this.setState((state: State) => ({...state, token}));
    setLocalStorage(STORAGE_KEY, JSON.stringify(token));
  };

  private renderImages() {
    return this.state.photos.map(photo => <Image key={ Math.floor(Math.random() * 99999) } photo={ photo }/>);
  }

  private setPhotos = (photos: Array<Photo>) => {
    this.setState(state => ({ ...state, photos }));
  };

  private readToken = () => {
    const token = JSON.parse(getLocalStorage(STORAGE_KEY));
    this.setState((state: State) => ({...state, token}));
  }

}

const WrappedApp = withStyles(styles)(App);

export { WrappedApp as App };
