import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { App } from './components/App';
import { ThemeProvider } from 'react-jss';
import { theme } from './styles';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './store';
import { createBrowserHistory } from 'history';
import { Provider as MobxProvider } from 'mobx-react';
import { Counter, FakeCounter, STORE_NAME } from './mobxStore/counter';
import { AUTH_INSTANCE_NAME, AuthStore, FakeAuthStore } from './mobxStore/AuthStore';
import { CustomContext } from './contexts/CustomContext';

export const history = createBrowserHistory();
const store = createStore(history);
const mobxStores = {
  [STORE_NAME]: process.env.REACT_APP_HELLO_WORLD === 'test' ? new FakeCounter() : new Counter(),
  [AUTH_INSTANCE_NAME]:  process.env.REACT_APP_HELLO_WORLD === 'test' ? new FakeAuthStore() : new AuthStore(),
};

ReactDOM.render(
	<ReduxProvider store={ store }>
		<MobxProvider {...mobxStores}>
			<ThemeProvider theme={ theme }>
				<ConnectedRouter history={ history }>
          <CustomContext.Provider value={'World'}>
					  <App/>
          </CustomContext.Provider>
				</ConnectedRouter>
			</ThemeProvider>
		</MobxProvider>
	</ReduxProvider>,
	document.getElementById('root'));
