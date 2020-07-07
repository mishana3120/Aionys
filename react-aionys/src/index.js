import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import createSagaMiddleware from "redux-saga";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import combineReducers from "./store/reducers";
import { NotesWatcher } from "./store/Saga/NotesWatcher";
import "./i18next";

const saga = createSagaMiddleware();

const store = createStore(
  combineReducers,
  compose(applyMiddleware(saga), window.__REDUX_DEVTOOLS_EXTENSION__())
);

saga.run(NotesWatcher);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<div>Loading ...</div>}>
        <App />
      </Suspense>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
