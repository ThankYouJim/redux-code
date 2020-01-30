import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // makes react + redux work together
import { createStore } from 'redux';

import App from './components/App';
import reducer from './reducers';

ReactDOM.render(
	<Provider store={createStore(reducer)}>
		<App/>
	</Provider>,
	document.getElementById('root')
);