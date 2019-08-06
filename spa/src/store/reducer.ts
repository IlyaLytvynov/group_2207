import { Action } from 'redux';
import { ACTION_TYPES } from './actionTypes';

export interface AppState {
  counter: number;
}

const INITIAL_STATE = {
  counter: 0,
};

export const reducer = (appState: AppState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREASE:
      return { counter: appState.counter + 1 };
    case ACTION_TYPES.DECREASE:
      return { counter: appState.counter - 1 };
    default:
      return appState;
  }
};
