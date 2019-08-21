import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styles from './SignIn.styles';
import { Page } from '../Page';
import { Counter } from '../Counter';
import { withStyles, WithStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Button } from '../Button';
import { baseTheme } from '../../styles/materialuiTheme';

const key = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scope = process.env.REACT_APP_SCOPE;

const SignIn: React.FC<RouteComponentProps & WithStyles<typeof styles>> = ({classes}) => {
	const AUTH_URL = `https://unsplash.com/oauth/authorize?client_id=${ key }&redirect_uri=${ redirectUri }&response_type=code&scope=${ scope }`;
	return <ThemeProvider theme={ baseTheme }>
		<Page title={ 'SIGN IN' }>
			<div className={ classes.signInLink }>
				<a className={ classes.signInLink } href={ AUTH_URL }>Sign in with your unsplash account</a>
				<Button color={ 'info' }>Click me</Button>
			</div>
			<Counter/>
		</Page>;
	</ThemeProvider>;
};

const WrappedWithStylesComponent = withStyles(styles)(SignIn);

export { WrappedWithStylesComponent as SignIn };

