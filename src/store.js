import { createStore, applyMiddleware, compose } from 'redux';

import { thunk } from 'redux-thunk';
import { productsReducer } from './reducers/productsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	productsReducer,
	composeEnhancers(applyMiddleware(thunk)),
);
