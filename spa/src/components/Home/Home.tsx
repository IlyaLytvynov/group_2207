import withStyles, { WithStyles } from 'react-jss';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import styles from './Home.styles';
import { Page } from '../Page';
import { DispatchProps, HomeProps, StateProps } from './Home.props';
import { Grid } from '../Grid';

class Home extends React.PureComponent<HomeProps & StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {
	public componentDidMount(): void {
		this.props.onFetchList();
	}

	public render() {
		const {classes, photos} = this.props;
		return <Page title={ 'CLONE UNSPLASH|HOME' }>
			<div className={ classes.container }>
				<Grid images={photos}/>
			</div>
		</Page>;
	}
}

const WrappedWithStylesComponent = withStyles(styles)(Home);
export { WrappedWithStylesComponent as HomeComponent };