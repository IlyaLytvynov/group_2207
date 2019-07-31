import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { ThemeProvider } from 'react-jss';
import { theme } from './styles';
import { ApiRequest } from './apis/ApiRequest';
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App/>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
