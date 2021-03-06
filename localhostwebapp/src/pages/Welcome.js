import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useTranslation } from "react-i18next";
import Bouttonnavigation from "../component/bouttonnavigation.js"

import imgSettings from '../assets/settings.svg'

export default function Welcome() {
  const { t } = useTranslation();
  const [second, setSecond] = useState("");
  const [localisation, setLocalisation] = useState("");

  const secondText = (e) => {
    setSecond(e.target.value);
    console.log("localisation:"+localisation);
    console.log("second:"+second);
  }

  const localisationText = (e) => {
    setLocalisation(e.target.value);
    console.log("localisation:"+localisation);
    console.log("second:"+second);
  }

  const requestHTTP=()=>{
    if(second!=null & localisation!=null){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location: localisation,send_interval:second })
    };
    fetch('http://10.3.141.1/basic/settings/set', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
          console.log("HTTP request error");
        });
    }
    else{console.log("no fetch")}
  }

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
            }}
          >
          <Container>
            <h1 className="text-center" style={{fontWeight: "500",color: "black"}}>{t("Welcome.config")}</h1>
            <img className="w-50 h-auto mx-auto d-flex py-5" src={imgSettings} alt="" />
          </Container>
            <Container style={{ backgroundColor: "lightgray" }}>
            <p style={{fontWeight: "500",color: "black"}}>{t("Welcome.Location")}</p>
              <InputGroup className="mb-3" onChange={(e) => {localisationText(e)}}>
                <FormControl
                  placeholder={t("Welcome.LocationUnique")}
                  aria-label="Localisation"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <p style={{fontWeight: "500",color: "black"}}>{t("Welcome.Second")}</p>
              <InputGroup className="mb-3" onChange={(e) => {secondText(e)}}>
                <FormControl
                  placeholder={t("Welcome.SecondUnique")}
                  aria-label="Seconde"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Container>
            <Container style={{display: "flex",justifyContent: "flex-end"}}>
            
            {(!second || !localisation)?"":<Bouttonnavigation url="/credential" text={t("Welcome.Next")} requestHTTP={requestHTTP} ></Bouttonnavigation>}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
