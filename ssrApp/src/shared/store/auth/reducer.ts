import { AUTH_ACTION_TYPES, AuthAction, AuthState } from './types';
import { AppState } from '../types';

export const INITIAL_STATE = {
  isAuthenticated: false,
  token: ''
};

export default (state: AuthState = INITIAL_STATE, action: AuthAction) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SET_TOKEN:
      const isAuthenticated = true;
      const token = action.payload!.access_token;
      return { ...state, isAuthenticated, token };
    default:
      return state;
  }
}

export const isAuthenticated = (state: AppState) => (state.auth.isAuthenticated);
