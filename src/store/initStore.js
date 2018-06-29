import {createStore} from 'redux';
import rootReducer from './rootReducer';

const initialState = {
  config: {},
};

const initStore = function () {
  const enhancers = undefined;
  let store = createStore (rootReducer, initialState, enhancers);
};

export default initStore;
