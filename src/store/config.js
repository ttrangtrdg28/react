import { combineReducers, createStore } from "redux";

const DEFAULT_STATE = {
  count: 0,
};

const rootReducer = combineReducers({
  countReducer: (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case "INCREASE":
        state.count += 1;
        break;
      case "DECREASE":
        state.count -= 1;
        break;
    }

    return { ...state };
  },
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
