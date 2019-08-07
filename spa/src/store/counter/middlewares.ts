import { Store } from 'redux';
import { ACTION_TYPES } from './actionTypes';
import { setCounter } from './actions';

const counterMiddleware = ({getState, dispatch}: Store) => (next: any) => (action) => {
  const state = getState();
  let counter;
  let timeout;

  if (action.type === ACTION_TYPES.INCREASE) {
    if (!timeout) {
      timeout = setTimeout(() => {
        counter = state.counter.value === 5 ? 0 : state.counter.value + 1;
        dispatch(setCounter(counter));
        timeout = undefined;
      },1000);
    }

  }
  if (action.type === ACTION_TYPES.DECREASE) {
    counter = state.counter.value === -5 ? 0 : state.counter.value - 1;
    dispatch(setCounter(counter));
  }

  next(action);
};

export const counterMiddlewares = [counterMiddleware];
