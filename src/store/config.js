import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { countReducer } from "./reducers/countReducer";
import { phoneReducer } from "./reducers/phoneReducer";
import { datGheReducer } from "./reducers/datGheReducer";
import { userReducer } from "./reducers/userReducer";
import { hookReducer } from "./reducers/hookReducer";

import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  countReducer, // countReducer = countReducer
  phoneReducer,
  datGheReducer,
  userReducer,
  hookReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
