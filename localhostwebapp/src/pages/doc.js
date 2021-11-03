import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";

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
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "stretch",
              height: "100vh",
            }}
          >
          <Container><h1 style={{fontWeight: "500",color: "#6dcc67"}}>{t("Doc.Doc")}</h1></Container>
         
            <Container style={{ backgroundColor: "lightgray" }}>
            <p style={{fontWeight: "500",color: "black"}}>{t("Doc.Documentation")}</p>
            <a href="https://github.com/kgtb32/WeatherStation/wiki/Installation-software">{t("Doc.Git")}</a>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
