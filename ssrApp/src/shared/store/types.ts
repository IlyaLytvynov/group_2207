import { ImagesState } from './images/types';
import { AuthState } from './auth/types';
import { HomeState } from './home/reducer';

export interface AppState {
  images: ImagesState,
  auth: AuthState,
  home: HomeState
}
