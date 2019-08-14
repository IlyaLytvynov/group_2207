import { Photo } from '../../models';

export interface HomeProps {
}

export interface StateProps {
	counter: number;
	isSignedIn: boolean;
	photos: Array<Photo>;
	userName: string;
}

export interface DispatchProps {
	onFetchList: () => void;
	onFetchUserProfile: () => void;
}