import React from "react";
import { setNotes } from "./actions";
import { notesReducer } from "./reducer";
import { SET_CURRENT_NOTE } from "../constants";

it("put new note", () => {
  let action = {
    type: SET_CURRENT_NOTE,
    payload: {
      id: 1,
      name: "NoteTest",
      detail: "Detail Note_TEST",
      date: new Date(),
    },
  };
  let state = {
    note: null,
  };

  let newState = notesReducer(state, action);

  expect(newState.note).not.toBeNull();
});
