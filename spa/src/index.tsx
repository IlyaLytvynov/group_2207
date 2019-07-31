import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { ThemeProvider } from 'react-jss';
import { theme } from './styles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>,
  document.getElementById('root')
);
