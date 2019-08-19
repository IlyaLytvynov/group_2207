import { IAction } from '../../types/action';

export interface AuthState {
  isAuthenticated: boolean,
  token: string;
}

export enum AUTH_ACTION_TYPES {
  SET_TOKEN = '@auth/set_token',
}

export type AuthAction = IAction<AUTH_ACTION_TYPES, {[key: string]: any}>;
