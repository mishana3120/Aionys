import {
  LOAD_ALL_NOTES,
  SET_ALL_NOTES,
  SET_CURRENT_NOTE,
} from "../constants";

export const loadAllNotes = () => ({
  type: LOAD_ALL_NOTES,
});

export const setNotes = (notes) => ({
  type: SET_ALL_NOTES,
  payload: notes,
});

export const setCurrentNote = (note) => ({
  type: SET_CURRENT_NOTE,
  payload: note,
});
