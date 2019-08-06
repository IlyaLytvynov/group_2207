import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  combineReducers,
  compose,
  createStore,
  applyMiddleware
} from 'redux';
import { Provider } from 'react-redux';

import { App } from './components/App';
import { ThemeProvider } from 'react-jss';
import { theme } from './styles';
import { ApiRequest } from './apis/ApiRequest';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { reducer } from './store/reducer';

// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  // @ts-ignore
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const store = createStore(
  reducer,
  undefined,
  composeEnhancers(applyMiddleware()));;

ReactDOM.render(
  <ThemeProvider theme={ theme }>
    <Router>
      <Provider store={ store }>
        <App/>
      </Provider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root'));
