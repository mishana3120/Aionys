import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  function ChangeLang(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <Row >
      <Col xs={12} className="text-center">
        <ButtonGroup>
          <Button variant="outline-dark" onClick={() => ChangeLang("en")}>
            English
          </Button>
          <Button variant="outline-dark" onClick={() => ChangeLang("ru")}>
            Русский
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
}
