import { combineReducers, createStore } from "redux";
import { countReducer } from "./reducers/countReducer";
import { phoneReducer } from "./reducers/phoneReducer";
import { datGheReducer } from "./reducers/datGheReducer";

const rootReducer = combineReducers({
  countReducer, // countReducer = countReducer
  phoneReducer,
  datGheReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
