import React, { useState } from "react";
import {
  Container,
  Button,
  Card,
  FormControl,
  ButtonGroup,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import moment from "moment";
import "moment/locale/ru";
import { Link } from "react-router-dom";
import api from "../services/api";
import { loadAllNotes, setCurrentNote } from "../store/Notes/actions";
import { XCircle } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

export function NoteDetail() {
  const note = useSelector((state) => state.notes.note);
  const dispatch = useDispatch();
  const [isUpdate, setUpdate] = useState(false);
  const [newNote, setNote] = useState();
  const [t] = useTranslation();

  if (!note) {
    return <Redirect to="/" />;
  }

  function onHandleUpdate() {
    setUpdate(true);
    setNote({
      id: note.id,
      name: note.name,
      detail: "",
      date: note.date,
    });
  }

  function UpdateAll() {
    dispatch(loadAllNotes());
    dispatch(setCurrentNote(null));
  }

  function onHandleEdit() {
    api
      .ReqNotes()
      .update(newNote)
      .then(() => UpdateAll());
  }

  const Buttons = () => {
    if (isUpdate) {
      return (
        <ButtonGroup className="float-right">
          <Button variant="outline-dark" onClick={() => setUpdate(false)}>
            {t("buttons.cancel")}
          </Button>
          <Button variant="outline-dark" onClick={onHandleEdit}>
            {t("buttons.done")}
          </Button>
        </ButtonGroup>
      );
    } else {
      return (
        <Button
          variant="outline-dark"
          className="float-right"
          onClick={onHandleUpdate}
        >
          {t("buttons.edit")}
        </Button>
      );
    }
  };

  function onHandleDelete() {
    api
      .ReqNotes()
      .delete(note.id)
      .then(() => UpdateAll());
  }

  return (
    <Container>
      <Card className="justify-content-center offset-lg-2 mt-5 col-lg-9 col-12 px-0">
        <Card.Header className="pr-0">
          <h4 className="float-left">{note.name}</h4>
          <Button
            variant="outline-danger border-0"
            className="float-right ml-2 pt-0"
            onClick={onHandleDelete}
          >
            <XCircle size={20} />
          </Button>
          <h4 className="float-right">{moment(note.date).format("L, LT")}</h4>
        </Card.Header>
        <Card.Body style={{ minHeight: "20rem" }}>
          {isUpdate && (
            <FormControl
              as="textarea"
              type="text"
              defaultValue={note.detail}
              onChange={(e) => setNote({ ...newNote, detail: e.target.value })}
            />
          )}
          {!isUpdate && <span>{note.detail}</span>}
        </Card.Body>
        <Card.Footer>
          <Link to="/">
            <Button variant="outline-dark" className="float-left">
              {t("buttons.back")}
            </Button>
          </Link>
          <Buttons />
        </Card.Footer>
      </Card>
    </Container>
  );
}
