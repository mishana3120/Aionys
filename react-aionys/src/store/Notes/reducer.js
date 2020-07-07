import { SET_ALL_NOTES, SET_CURRENT_NOTE } from "../constants";

const NotesState = {
  notes: [],
  note: null,
};

export const notesReducer = (state = NotesState, action) => {
  switch (action.type) {
    case SET_ALL_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case SET_CURRENT_NOTE:
      return {
        ...state,
        note: action.payload,
      };
    default:
      return state;
  }
};
