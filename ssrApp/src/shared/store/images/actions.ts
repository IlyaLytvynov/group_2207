import { IMAGES_ACTION_TYPES, ImagesAction } from './types';
import { Dispatch } from 'redux';
import { searchItems as fetchItems } from '../../services/unsplash';

const loadingStart = () => (
  {
    type: IMAGES_ACTION_TYPES.LOADING,
    payload: { isLoading: true }
  }
)

const searchSucceed = (payload: any) => ({
  type: IMAGES_ACTION_TYPES.SEARCH_SUCCEED,
  payload
});

const searchError = () => (
  {
    type: IMAGES_ACTION_TYPES.SEARCH_ERROR,
  }
);
// Action creator
export const getItems = (payload: {value: string, page: number}): any => {
  return async (dispatch: Dispatch<ImagesAction>) => {
    dispatch(loadingStart());

    const response = await fetchItems(payload);

    if (response) {
      dispatch(searchSucceed({...response, isLoading: false}));
    } else {
      dispatch(searchError());
    }
  }
};
