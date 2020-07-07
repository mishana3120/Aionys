import React, { useState } from "react";
import {
  Container,
  Col,
  ListGroup,
  FormControl,
  ButtonGroup,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import "moment/locale/ru";
import { Link } from "react-router-dom";
import { setCurrentNote, loadAllNotes } from "../store/Notes/actions";
import { PlusSquareFill, Check2, X } from "react-bootstrap-icons";
import api from "../services/api";
import { useTranslation } from "react-i18next";

export function NoteMain() {
  moment.locale();
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const [isAdd, setAdd] = useState(false);
  const [newNote, setNote] = useState({
    id: "",
    name: "",
    detail: "",
    date: new Date(),
  });
  const { t } = useTranslation();

  function onHandleAdd() {
    if (newNote.name !== "") {
      setAdd(false);
      api
        .ReqNotes()
        .create(newNote)
        .then(() => {
          setAdd(false);
          dispatch(loadAllNotes());
          setNote({ ...newNote, name: "" });
        });
    } else {
      alert(t('message.addNote'))
    }
  }

  return (
    <Container>
      <Col className="justify-content-center offset-lg-2 mt-5 col-lg-9 col-12">
        <ListGroup>
          {notes.map((note) => {
            return (
              <Link
                to={"/note/" + note.id}
                onClick={() => dispatch(setCurrentNote(note))}
                key={note.id}
              >
                <ListGroup.Item action>
                  <span className="float-left">{note.name}</span>
                  <span className="float-right">
                    {moment(note.date).format("L, LT")}
                  </span>
                </ListGroup.Item>
              </Link>
            );
          })}
          {isAdd && (
            <ListGroup.Item>
              <FormControl
                type="text"
                value={newNote.name}
                onChange={(e) => setNote({ ...newNote, name: e.target.value })}
              />
            </ListGroup.Item>
          )}
          <ListGroup.Item className="border-0 align-self-center">
            {!isAdd && (
              <PlusSquareFill
                size={20}
                className="my-0"
                color="#28a745"
                style={{ cursor: "pointer" }}
                onClick={() => setAdd(true)}
              />
            )}
            {isAdd && (
              <ButtonGroup>
                <X
                  size={20}
                  className="my-0"
                  color="#28a745"
                  style={{ cursor: "pointer" }}
                  onClick={() => setAdd(false)}
                />
                <Check2
                  size={20}
                  className="my-0"
                  color="#28a745"
                  style={{ cursor: "pointer" }}
                  onClick={onHandleAdd}
                />
              </ButtonGroup>
            )}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Container>
  );
}
