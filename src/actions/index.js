import {
  CREATE_LIST_ITEM,
  FETCH_LIST_ITEMS,
  FETCH_LIST_ITEM,  // eslint-disable-line
  DELETE_LIST_ITEM,
  EDIT_LIST_ITEM,
} from "./types";

import listItems from "../apis/listItems";

export const fetchListItems = () => async (dispatch) => {
  const response = await listItems.get("/list");

  dispatch({ type: FETCH_LIST_ITEMS, payload: response.data });
};

export const createListItem = (formValues) => async (dispatch, getState) => { // eslint-disable-line
  const response = await listItems.post("/list", { ...formValues });

  dispatch({ type: CREATE_LIST_ITEM, payload: response.data });
};

export const deleteListItem = (id) => async (dispatch) => {
  await listItems.delete(`/list/${id}`);

  dispatch({ type: DELETE_LIST_ITEM, payload: id });
};

export const editListItem = (id, formValues) => async (dispatch) => {
  const response = await listItems.patch(`/list/${id}`, formValues);

  dispatch({ type: EDIT_LIST_ITEM, payload: response.data });
};
