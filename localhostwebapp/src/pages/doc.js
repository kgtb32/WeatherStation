import React from 'react';
import { useTranslation } from "react-i18next";

import { Container, Row, Col } from 'react-bootstrap'

import imgDone from '../assets/done.svg'

export default function Doc() {
  const { t } = useTranslation();
  return (
    <div>
      <Container style={{ backgroundColor: "chocolate" }}>
        <Row style={{ height: "100vh" }}>
          <Col
            style={{
              backgroundColor: "#ffff",
              display: "flex",
              alignContent: "space-around",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "stretch",
              height: "100vh",
            }}
          >
          <Container className="text-center">
            <img src={imgDone} alt="" className="w-50 h-auto mx-auto d-flex py-5"/>
            <h1 style={{fontWeight: "500"}} >{t("Doc.Doc")}</h1>
            <p>{t('Doc.desc')}</p>
          </Container>
          <Container style={{ backgroundColor: "lightgray" }} className="py-3 my-4 rounded text-center">
            <p style={{fontWeight: "500",color: "black"}}>{t("Doc.Documentation")}</p>
            <a href="https://github.com/kgtb32/WeatherStation/wiki/Installation-software">{t("Doc.Git")}</a>
          </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
