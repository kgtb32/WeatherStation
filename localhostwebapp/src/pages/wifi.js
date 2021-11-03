import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import Bouttonnavigation from "../component/bouttonnavigation.js"

export default function Wifi() {
  const { t } = useTranslation();

  const [wifiname, setWifiname] = useState("");
  const [password, setPassword] = useState("");

  const wifinameText = (e) => {
    setWifiname(e.target.value);
    console.log("wifiname:"+wifiname);
    console.log("password:"+password);
  }

  const passwordText = (e) => {
    setPassword(e.target.value);
    console.log("wifiname:"+wifiname);
    console.log("password:"+password);
  }

  const requestHTTP=()=>{
    if(wifiname!=null & password!=null){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ssid: wifiname,password:password })
    };
    fetch('http://127.0.0.1:5000/wifi/set', requestOptions)
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
          <Container><h1 style={{fontWeight: "500",color: "black"}}>{t("Wifi.Wifi")}</h1></Container>
         
            
            <Container style={{ backgroundColor: "lightgray" }}>
            <p style={{fontWeight: "500",color: "black"}}>{t("Wifi.Wifi")}</p>
              <InputGroup className="mb-3" onChange={(e) => {wifinameText(e)}}>
                <FormControl
                  placeholder={t("Wifi.Name")}
                  aria-label="Localisation"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <p style={{fontWeight: "500",color: "black"}}>{t("Wifi.Password")}</p>
              <InputGroup className="mb-3" onChange={(e) => {passwordText(e)}}>
                <FormControl
                  placeholder={t("Wifi.Password")}
                  aria-label="Seconde"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Container>
            <Container style={{display: "flex",justifyContent: "flex-end"}}>
            {(!wifiname || !password)?"":<Bouttonnavigation url="/doc" text={t("Wifi.Next")} requestHTTP={requestHTTP} ></Bouttonnavigation>}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
