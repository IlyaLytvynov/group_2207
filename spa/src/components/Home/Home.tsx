import withStyles, { WithStyles } from 'react-jss';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { CustomContext } from '../../contexts/CustomContext';
import styles from './Home.styles';
import { Page } from '../Page';
import { DispatchProps, HomeProps, StateProps } from './Home.props';
import { Grid } from '../Grid';
import { Context } from 'react';

class Home extends React.PureComponent<HomeProps & StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {
	public static contextType: Context<any> = CustomContext;

	public componentDidMount(): void {
		this.props.onFetchList();
		this.props.onFetchUserProfile();
	}

	public render() {
		const {classes, photos} = this.props;
		console.log(this.context);
		return <Page title={ 'CLONE UNSPLASH|HOME' }>
			<div className={ classes.container }>
				<h2>hello { this.props.userName }</h2>
				<Grid images={ photos }/>
			</div>
		</Page>;
	}
}

const WrappedWithStylesComponent = withStyles(styles)(Home);
export { WrappedWithStylesComponent as HomeComponent };