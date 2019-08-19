import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from '../shared/components/App';
import configureStore from '../shared/store';
//@ts-ignore
const state = window.__STATE__;
// @ts-ignore
delete window.__STATE__;
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = configureStore(state, composeEnhancers());

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.querySelector('#app'));

