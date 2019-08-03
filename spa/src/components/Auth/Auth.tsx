import { Redirect, RouteComponentProps } from 'react-router';
import * as React from 'react';
import { ApiRequest } from '../../apis/ApiRequest';
import { Token } from '../../models/Auth';
import axios from 'axios';

const key = process.env.REACT_APP_CLIENT_ID;
const secret = process.env.REACT_APP_SECRET;
const redirectUrl = process.env.REACT_APP_REDIRECT_URI;


interface AuthProps {
  onSuccess: (token: Token) => void;
}

export class Auth extends React.Component<AuthProps & RouteComponentProps> {
  public componentDidMount = async () => {
    if (this.isValid) {
      this.getToken();
    }
  };

  public render() {
    const { location } = this.props;
    if (this.isValid) {
      const code = location.search.split('=')[1];
      return <div>
        <button onClick={this.getToken}>GET TOKEN</button>
      </div>;
    }
    return <Redirect to={'/'}/>;
  }

  private getToken = async () => {
    try {
      const code = this.props.location.search.split('=')[1];
      const AUTH_URL = `https://unsplash.com/oauth/token?client_id=${ key }&client_secret=${ secret }&redirect_uri=${ redirectUrl }&code=${ code }&grant_type=${ 'authorization_code' }`;
      const response = await axios.post<Token>(AUTH_URL);
      this.props.onSuccess(response.data);
      this.props.history.push('/');
    } catch (e) {
      throw e;
    }
  };

  get isValid() {
    return this.props.location.search.indexOf('code') !== -1;
  }
}
