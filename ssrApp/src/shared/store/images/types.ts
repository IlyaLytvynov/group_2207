import { Image } from '../../types/imagesApi';
import { IAction } from '../../types/action';

export enum IMAGES_ACTION_TYPES {
  SEARCH_SUCCEED = '@images/search_succeed',
  LOADING = '@images/loading',
  SEARCH_ERROR = '@images/search_error'
}

export type ImagesAction = IAction<IMAGES_ACTION_TYPES, {[key: string]: any}>;

export interface ImagesState {
  searchValue?: string;
  items: Array<Image>;
  totalPages: number;
  total: number;
  isLoading: boolean
}
