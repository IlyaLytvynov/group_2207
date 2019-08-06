import { ACTION_TYPES } from './actionTypes';

export const increaseCounter = () => ({
  type: ACTION_TYPES.INCREASE,
});

export const decreaseCounter = () => ({
  type: ACTION_TYPES.DECREASE,
});
