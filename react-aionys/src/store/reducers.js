import { notesReducer } from "./Notes/reducer";
import { combineReducers } from "redux";

export default combineReducers({
    notes: notesReducer,
  });