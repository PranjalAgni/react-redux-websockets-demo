import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import baseReducer from '../reducers/base';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/base';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const devTools =
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : compose;

  const rootReducer = combineReducers({
    base: baseReducer
  });

  const middlewareEnhancer = applyMiddleware(logger, sagaMiddleware);
  const composedEnhancers = compose(middlewareEnhancer, devTools);
  const store = createStore(rootReducer, undefined, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};
