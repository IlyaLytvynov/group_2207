import { IMAGES_ACTION_TYPES, ImagesAction, ImagesState } from './types';
import { AppState } from '../types';
import { Image } from '../../types/imagesApi';

export const INITIAL_STATE = {
  items: [] as Array<Image>,
  totalPages: 0,
  total: 0,
  isLoading: false
};

export default (state: ImagesState = INITIAL_STATE, action: ImagesAction) => {
  switch(action.type) {
    case IMAGES_ACTION_TYPES.LOADING:
      return { ...state, ...action.payload};
    case IMAGES_ACTION_TYPES.SEARCH_SUCCEED:
      return { ...state, ...action.payload};
    default:
      return state;
  }
}
// SELECTORS
export const getImages = (state: AppState): Array<Image> => {
  return state.images.items;
};

export const getIsLoading = (state: AppState): boolean => state.images.isLoading;

export const getTotalItems = (state: AppState) => {
  return state.images.total;
};

export const getTotalPages = (state: AppState) => {
  return state.images.totalPages;
};

