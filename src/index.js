/* eslint-disable react/jsx-filename-extension */
/* global document */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import riskReducer from './reducers/riskReducer';


const data = [200, 20, 200, 10, 20];
const initialState = {
  risk: 1,
  data,
};
const store = createStore(riskReducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
