import { AppState } from '../../store';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { connect } from 'react-redux';
import { HomeComponent } from './Home';
import { getPhotos, fetchList } from '../../store/photos';
import { DispatchProps, HomeProps, StateProps } from './Home.props';

const mapStateToProps = (state: AppState): StateProps => {
	return {
		counter: state.counter.value,
		isSignedIn: !!state.auth.token,
		photos: getPhotos(state)
	};
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
	onFetchList: () => dispatch(fetchList())
});

const ConnectedComponent = connect<StateProps, DispatchProps, HomeProps>(mapStateToProps, mapDispatchToProps)(HomeComponent);

export { ConnectedComponent as Home };
