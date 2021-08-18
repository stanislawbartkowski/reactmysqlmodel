import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import { ConfirmProvider } from 'material-ui-confirm';

import { makeStore } from './reactrestapi/dist/store/createstore';

import theme from './reactrestapi/dist/store/createTheme';

const store = makeStore();

const app = (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ConfirmProvider>
                <App />
            </ConfirmProvider>
        </ThemeProvider>
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();