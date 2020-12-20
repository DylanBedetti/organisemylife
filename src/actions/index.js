import {
  CREATE_LIST_ITEM,
  FETCH_LIST_ITEMS,
  FETCH_LIST_ITEM,
  DELETE_LIST_ITEM,
  EDIT_LIST_ITEM,
} from "./types";

import listItems from "../apis/listItems";

export const fetchListItems = () => async (dispatch) => {
  const response = await listItems.get("/list");

  dispatch({ type: FETCH_LIST_ITEMS, payload: response.data });
};
