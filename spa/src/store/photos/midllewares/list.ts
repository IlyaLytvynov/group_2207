import { Store } from 'redux';
import { Action } from '../../types';
import { ACTION_TYPES } from '../actionTypes';
import { ApiRequest } from '../../../apis/ApiRequest';
import { Photo } from '../../../models';
import { getAccessToken } from '../../auth/selectors';
import { setList } from '../actions';

const fetchMiddleware = ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {
	if (action.type === ACTION_TYPES.FETCH_LIST) {
		try {
			const state = getState();
			const accessToken = getAccessToken(state);
			const response = await ApiRequest.get<Array<Photo>>('/photos?per_page=4', {token: accessToken});
			dispatch(setList(response));
		} catch (e) {
			throw e;
		}
	}

	next(action);
};

export const fetchMiddlewares = [fetchMiddleware];