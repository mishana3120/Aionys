import { takeEvery, put } from "redux-saga/effects";
import { LOAD_ALL_NOTES, SET_ALL_NOTES } from "../constants";
import { call } from "redux-saga/effects";
import api from "../../services/api";

export function* NotesWatcher() {
  yield takeEvery([LOAD_ALL_NOTES], notesWorker);
}

function* notesWorker() {
  const payload = yield call(loadNotes);
  yield put({ type: SET_ALL_NOTES, payload });
}

async function loadNotes() {
  var notes = (await api.ReqNotes().feetchNotes()).data;
  return notes;
}
