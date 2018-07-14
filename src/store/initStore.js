import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers/rootReducer";

const initialState = {
  config: {
    selections: {}
  }
};

const initStore = function() {
  const middleware = [];
  const enhancers = composeWithDevTools(applyMiddleware(...middleware));
  let store = createStore(rootReducer, initialState, enhancers);
  return store;
};

export default initStore;
