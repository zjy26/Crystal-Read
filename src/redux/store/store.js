'use strict';

import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

const reducers = require('../reducers');
const logger = createLogger();

export default function configureStore(initialState) {
  let store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk, logger),
      // autoRehydrate()
    )
  );

  persistStore(store);

  return store;
}