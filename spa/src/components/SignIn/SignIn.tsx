import Helmet from 'react-helmet';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import withStyles, { WithStyles } from 'react-jss';
import styles from './SignIn.styles';
import { Page } from '../Page';
import { Counter } from '../Counter';
import counter from '../../mobxStore/counter';

const key = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scope = process.env.REACT_APP_SCOPE;

const SignIn: React.FC<RouteComponentProps & WithStyles<typeof styles>> = ({classes}) => {
	const AUTH_URL = `https://unsplash.com/oauth/authorize?client_id=${ key }&redirect_uri=${ redirectUri }&response_type=code&scope=${ scope }`;
	return <Page title={ 'SIGN IN' }>
		<div className={ classes.signInLink }>
			<a className={ classes.signInLink } href={ AUTH_URL }>Sign in with your unsplash account</a>
		</div>
		<Counter />
	</Page>;
};

const WrappedWithStylesComponent = withStyles(styles)(SignIn);

export { WrappedWithStylesComponent as SignIn };

