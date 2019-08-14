// @ts-ignore
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { History } from 'history';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import counter, { counterMiddlewares, CounterState } from './counter';
import auth, { authMiddlewares, AuthState } from './auth';
import photos, { photosMiddleWares, PhotosState } from './photos';
import userProfile, { UserProfileState } from './userProfile';

// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  // @ts-ignore
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

export interface AppState {
  counter: CounterState;
  auth: AuthState;
  photos: PhotosState;
  userProfile: UserProfileState;
}

const rootReducer = (history: History) => combineReducers(
  {
    counter,
    auth,
    photos,
    userProfile,
    router: connectRouter(history),
  }
);

export default (history) => {
  return createStore(
    rootReducer(history),
    undefined,
    composeEnhancers(
      // @ts-ignore
      applyMiddleware(
        thunk,
        routerMiddleware(history),
        ...counterMiddlewares,
        ...authMiddlewares,
        ...photosMiddleWares
      )
    )
  );
};
