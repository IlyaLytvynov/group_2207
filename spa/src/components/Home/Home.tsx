import withStyles, { WithStyles } from 'react-jss';
import styles from './Home.styles';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
const key = process.env.REACT_APP_CLIENT_ID;
const apiUrl = process.env.REACT_APP_API_URL;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scope = process.env.REACT_APP_SCOPE;

class Home extends React.PureComponent<RouteComponentProps & WithStyles<typeof styles>> {

  public render() {
    const AUTH_URL = `https://unsplash.com/oauth/authorize?client_id=${key}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    return <div>
      <a href={AUTH_URL}>Sign in</a>
    </div>;
  }
}

const WrappedComponent = withStyles(styles)(Home);

export { WrappedComponent as Home };
