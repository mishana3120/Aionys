import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { NoteMain } from "./components/NoteMain";
import { useDispatch } from "react-redux";
import { loadAllNotes } from "./store/Notes/actions";
import { NoteDetail } from "./components/NoteDetail";
import { LanguageSelector } from "./components/languageSelector";

const Body = () => {
  return (
    <Route>
      <Route path="/"><LanguageSelector /></Route>
      <Route path="/" exact component={NoteMain} />
      <Route path="/note/:id" component={NoteDetail} />
    </Route>
  );
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllNotes());
    // eslint-disable-next-line
  }, []);
  return <Body />;
}

export default App;
