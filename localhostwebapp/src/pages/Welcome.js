import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import Bouttonnavigation from "../component/bouttonnavigation.js"

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
    fetch('http://127.0.0.1:5000/basic/settings/set', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
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
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "stretch",
              height: "100vh",
            }}
          >
          <Container><h1 style={{fontWeight: "500",color: "black"}}>{t("Welcome.Welcome")}</h1></Container>
         
            <Container style={{ backgroundColor: "brown" }}>
            <p style={{fontWeight: "500",color: "#ffff"}}>{t("Welcome.Location")}</p>
              <InputGroup className="mb-3" onChange={(e) => {localisationText(e)}}>
                <FormControl
                  placeholder={t("Welcome.LocationUnique")}
                  aria-label="Localisation"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <p style={{fontWeight: "500",color: "#ffff"}}>{t("Welcome.Second")}</p>
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
