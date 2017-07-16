import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './reducers/store';

import './style/main.scss';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
