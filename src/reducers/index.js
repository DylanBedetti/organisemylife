import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import listReducer from "./listReducer";

const reducers = combineReducers({
  list: listReducer,
  form: reduxFormReducer,
});

export default reducers;
