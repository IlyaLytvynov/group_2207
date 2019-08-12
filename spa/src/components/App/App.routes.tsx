import { PATHES } from './App.pathes';
import { Redirect, RouteComponentProps } from 'react-router';
import { Home } from '../Home';
import * as React from 'react';
import { Auth } from '../Auth';
import { SignIn } from '../SignIn';

export interface AppRoute {
	path: PATHES;
	render: (params: RouteComponentProps) => any;
	exact?: boolean;
	isProtected?: boolean;
}

export default [
	{
		path: PATHES.SIGN_IN,
		render: (props: RouteComponentProps) => <SignIn { ...props }/>,
	},
	{
		path: PATHES.HOME,
		render: (props: RouteComponentProps) => <Home { ...props }/>,
		exact: true,
		isProtected: true,
	},
	{
		path: PATHES.AUTH,
		render: (props: RouteComponentProps) => <Auth { ...props }/>
	},
	{
		path: PATHES.NOT_FOUND,
		render: () => <h2>Not found!</h2>
	},
	{
		path: PATHES.REDIRECT,
		render: () => <Redirect to={ '/404' }/>
	}
];