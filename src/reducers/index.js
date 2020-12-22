import { combineReducers } from "redux";
// import { reduxFormReducer } from "redux-form";

import listReducer from "./listReducer";

export default combineReducers({
  list: listReducer,
  // form: reduxFormReducer,
});
