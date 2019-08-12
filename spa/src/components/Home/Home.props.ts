import { Photo } from '../../models';

export interface HomeProps {
}

export interface StateProps {
	counter: number;
	isSignedIn: boolean;
	photos: Array<Photo>;
}

export interface DispatchProps {
	onFetchList: () => void;
}