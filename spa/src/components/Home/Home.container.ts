import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../../store';
import { HomeComponent } from './Home';
import { getPhotos, fetchList } from '../../store/photos';
import { DispatchProps, HomeProps, StateProps } from './Home.props';
import { fetchUserProfile, getUserName } from '../../store/userProfile';

const mapStateToProps = (state: AppState): StateProps => {
	return {
		counter: state.counter.value,
		isSignedIn: !!state.auth.token,
		photos: getPhotos(state),
		userName: getUserName(state)
	};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
	onFetchList: () => dispatch(fetchList()),
	onFetchUserProfile: () => dispatch(fetchUserProfile())
});

const ConnectedComponent = connect<StateProps, DispatchProps, HomeProps>(mapStateToProps, mapDispatchToProps)(HomeComponent);

export { ConnectedComponent as Home };
