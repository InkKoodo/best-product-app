import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';

import App from './App';
import { amplifyConfig, createStore } from './config';

const GlobalCss = withStyles({
  '@global': {
    'body::-webkit-scrollbar': {
      width: '.5em',
    },
    'body::-webkit-scrollbar-thumb': {
      backgroundColor: '#bebebe',
      borderRadius: 50,
    },
    'body::-webkit-scrollbar-button': {
      display: 'none',
    },
  },
})(() => null);

Amplify.configure(amplifyConfig);

const store = createStore();
const theme = createMuiTheme({
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
  },
  palette: {
    primary: {
      main: '#333',
    },
  },
  shape: {
    borderRadius: 0,
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <GlobalCss />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
