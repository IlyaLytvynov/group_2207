import { AppState } from '../index';

export const getIsSignedIn = (state: AppState): boolean => !!state.auth.token;
export const getAccessToken = (state: AppState): string => state.auth.token.access_token;