import withStyles, { WithStyles } from 'react-jss';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import styles from './Home.styles';
import { Header } from '../Header';
import { Profile } from '../../models';
import { connect } from 'react-redux';
import { AppState } from '../../store/';

const key = process.env.REACT_APP_CLIENT_ID;
const apiUrl = process.env.REACT_APP_API_URL;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scope = process.env.REACT_APP_SCOPE;

interface HomeProps {
}

interface StateProps {
  counter: number;
  isSignedIn: boolean;
}

class Home extends React.PureComponent<HomeProps & StateProps & RouteComponentProps & WithStyles<typeof styles>> {
  public render() {
    return <div>
      <Header/>
      { this.props.isSignedIn ? this.renderAuthorisedContent() : this.renderSignIn() };
      { this.props.counter }
    </div>;
  }

  private renderAuthorisedContent = () => {
    return <h2>Hello user!!</h2>;
  };

  private renderSignIn = () => {
    const AUTH_URL = `https://unsplash.com/oauth/authorize?client_id=${ key }&redirect_uri=${ redirectUri }&response_type=code&scope=${ scope }`;
    return <div>
      <a href={ AUTH_URL }>Sign in</a>
    </div>;
  };
}

const mapStateToProps = (state: AppState): StateProps => {
  return {
    counter: state.counter.value,
    isSignedIn: !!state.auth.token
  };
};

const WrappedWithStylesComponent = withStyles(styles)(Home);
const ConnectedComponent = connect<StateProps, HomeProps>(mapStateToProps)(WrappedWithStylesComponent);

export { ConnectedComponent as Home };
