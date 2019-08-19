import { Dispatch } from 'redux';
import { fetchToken, FetchTokenResponse } from '../../services/auth';
import { AUTH_ACTION_TYPES, AuthAction } from './types';

const dispatchSetToken = (payload: FetchTokenResponse): AuthAction => (
  {
    type: AUTH_ACTION_TYPES.SET_TOKEN,
    payload
  }
);

export const setToken = (code: string): any => async (dispatch: Dispatch<AuthAction>) => {
  const responseData = await fetchToken(code);

  dispatch(dispatchSetToken(responseData));
};
