import {
  CREATE_LIST_ITEM,
  FETCH_LIST_ITEMS,
  FETCH_LIST_ITEM,
  DELETE_LIST_ITEM,
  EDIT_LIST_ITEM,
} from "../actions/types";
import _ from "lodash";

const listReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LIST_ITEMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_LIST_ITEM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_LIST_ITEM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default listReducer;
