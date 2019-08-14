import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/App';
import { ThemeProvider } from 'react-jss';
import { theme } from './styles';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './store';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={ store }>
    <ThemeProvider theme={ theme }>
      <ConnectedRouter history={ history }>
        <App/>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'));
