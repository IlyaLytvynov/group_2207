import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';

import { Photo, Profile } from '../../models';
import { v4 as uuid } from 'uuid';
import styles from './App.styles';
import { Switch, Route } from 'react-router';
import routes, { AppRoute } from './App.routes';
import { ProtectedRoute } from '../ProtectedRoute';

interface State {
	photos: Array<Photo>;
	profile: Profile | undefined;
}

class App extends React.Component<WithStyles<typeof styles>, State> {
	public render() {
		const {classes} = this.props;
		return <div className={ classes.root }>
			<Switch>
				{
					routes.map((route: AppRoute) => route.isProtected ? <ProtectedRoute key={ uuid() } { ...route } /> : <Route key={ uuid() } { ...route }/>)
				}
			</Switch>
		</div>;
	}
}

const WrappedApp = withStyles(styles)(App);

export { WrappedApp as App };
