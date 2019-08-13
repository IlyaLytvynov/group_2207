import { Store } from 'redux';
import { Action } from '../../types';
import { ACTION_TYPES } from '../actionTypes';
import { ApiRequest } from '../../../apis/ApiRequest';
import { Photo } from '../../../models';
import { getAccessToken } from '../../auth/selectors';
import { setList } from '../actions';
import { getPagination } from '../selectors';
import { Pagination } from '../../../models/Pagination';

const fetchMiddleware = ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {
	if (action.type === ACTION_TYPES.FETCH_LIST) {
		try {
			const state = getState();
			const {perPage, page, orderBy} = getPagination(state);
			const accessToken = getAccessToken(state);
			const url = `/photos?per_page=${ perPage }&page=${ page }&order_by=${ orderBy }`;
			const response = await ApiRequest.get<Array<Photo>>(url, {token: accessToken});
			dispatch(setList(response));
		} catch (e) {
			throw e;
		}
	}

	next(action);
};

const paginationMiddleware = ({dispatch, getState}: Store) => (next: (action: Action<Pagination>) => void) => async (action: Action<Pagination>) => {
	if (action.type === ACTION_TYPES.CHANGE_PAGINATION) {
		try {
		} catch (e) {
			throw e;
		}
	}

	next(action);
};

export const fetchMiddlewares = [ fetchMiddleware, paginationMiddleware ];