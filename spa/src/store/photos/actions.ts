import { Photo } from '../../models';
import { ACTION_TYPES } from './actionTypes';
import { Pagination } from '../../models/Pagination';

export const setList = (list: Array<Photo>) => ({
	type: ACTION_TYPES.SET_LIST,
	payload: list,
});

export const fetchList = () => ({
	type: ACTION_TYPES.FETCH_LIST,
});

export const setPagination = (pagination: Pagination) =>({
	type: ACTION_TYPES.FETCH_LIST,
	payload: pagination
});

export const changePagination = (pagination: Pagination) =>({
	type: ACTION_TYPES.CHANGE_PAGINATION,
	payload: pagination
});