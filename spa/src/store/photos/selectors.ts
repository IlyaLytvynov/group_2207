import { AppState } from '../index';
import { Photo } from '../../models';

export const getPhotos = (state: AppState): Array<Photo> => state.photos.list;