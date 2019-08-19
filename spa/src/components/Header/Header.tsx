import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Header.styles';
import { Button } from '../Button';
import { Profile } from '../../models';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { decreaseCounter, increaseCounter } from '../../store/counter';
import { AppState } from '../../store';
import { signOut } from '../../store/auth';
import { inject, observer } from 'mobx-react';
import { AUTH_INSTANCE_NAME, IAuthStore } from '../../mobxStore/AuthStore';

interface StateProps {
	isSignedIn: boolean;
}

interface DispatchProps {
	onIncrease: () => void;
	onDecrease: () => void;
	onSignOut: () => void;
}

interface OwnProps {
	[AUTH_INSTANCE_NAME]?: IAuthStore;
}

@inject(AUTH_INSTANCE_NAME)
@observer
class Header extends React.PureComponent<OwnProps & StateProps & DispatchProps & WithStyles<typeof styles>> {
	public render() {
		const {classes} = this.props;
		return <header className={ classes.root }>
			<div className={ classes.content }>
				{/*{ counter.value }*/}

				{/*{ counter.hexValue }*/}
				<div>
					{/*<button onClick={ () => counter.clear() }>CLEAR</button>*/}
					{ this.renderAuthControls() }
				</div>
			</div>
		</header>;
	}

	private renderAuthControls = () => {
		if (this.props.isSignedIn) {
			return <>
				<Button onClick={ this.props.onSignOut }>Sign Out</Button>
			</>;
		} else {
			return null;
		}
	};
}

const WrappedHeader = withStyles(styles)(Header);

const mapStateToProps = (state: AppState): StateProps => {
	return {
		isSignedIn: !!state.auth.token
	};
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
	return {
		onIncrease: () => dispatch(increaseCounter()),
		onDecrease: () => dispatch(decreaseCounter()),
		onSignOut: () => dispatch(signOut()),
	};
};

const ConnectedComponent = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(WrappedHeader);

export { ConnectedComponent as Header };



