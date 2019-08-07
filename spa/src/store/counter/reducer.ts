import { ACTION_TYPES } from './actionTypes';
import { Action } from '../types';

export interface CounterState {
  value: number;
}

const INITIAL_STATE = {
  value: 0,
};

export default (appState: CounterState = INITIAL_STATE, action: Action<number>) => {
  switch (action.type) {
    case ACTION_TYPES.SET_COUNTER:
      return {...appState, value: action.payload };
    default:
      return appState;
  }
};
