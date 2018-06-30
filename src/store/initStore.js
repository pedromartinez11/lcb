import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';

const initialState = {};

const initStore = function () {
  const middleware = [];
  const enhancers = compose (
    applyMiddleware (...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__ ()
  );
  let store = createStore (rootReducer, initialState, enhancers);
  return store;
};

export default initStore;
