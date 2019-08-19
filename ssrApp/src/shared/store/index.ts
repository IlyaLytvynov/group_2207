import { combineReducers, Reducer,  applyMiddleware, compose, createStore, Middleware  } from 'redux';
import images from './images';
import auth from './auth';
import home from './home';
import { AppState } from './types';
import reduxThunk from 'redux-thunk';

// const createStoreWithMiddleware = (middleWears: Array<Middleware> = []) => );

const reducer: Reducer<AppState> = combineReducers<AppState>({
  images,
  auth,
  home
});

export default function configureStore(initialState = {}, middleWears: Array<Middleware> = []) {
  return createStore(reducer, initialState, compose(applyMiddleware(
    reduxThunk,
    ...middleWears
  )));
}
