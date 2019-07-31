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

interface State {
  photos: Array<Photo>;
}

class App extends React.Component<WithStyles<typeof styles>, State> {
  public state = {
    photos: []
  };

  public componentWillMount = async () => {
    try {
      const photos = await ApiRequest.get('/photos');
      this.setPhotos(photos);
    } catch (e) {
      throw e;
    }
  };

  public render() {
    const { classes } = this.props;
    return <div className={ classes.root }>
      <Switch>
        <Route exact={ true } path={ '/' } component={ Home }/>
        <Route path={ '/about' } render={ (props: RouteComponentProps) => <h1>{props.location.pathname}</h1> }/>
        <Route path={ '/auth' } render={ this.renderAuth }/>
        <Route path={'/404'} render={() => <h2>Not found!</h2>} />
        <Route path={ '/*' } render={() => <Redirect to={'/404'} />}/>
      </Switch>
    </div>;
  }

  private renderAuth = (props: RouteComponentProps) => {
    return <Auth {...props}/>;
  };

  private renderImages() {
    return this.state.photos.map(photo => <Image key={ Math.floor(Math.random() * 99999) } photo={ photo }/>);
  }

  private setPhotos = (photos: Array<Photo>) => {
    this.setState(state => ({ ...state, photos }));
  };

}

const WrappedApp = withStyles(styles)(App);

export { WrappedApp as App };
