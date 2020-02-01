import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

import App from './components/App';

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composedEnhancers(applyMiddleware())
);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
  ,
  document.querySelector('#root')
);
