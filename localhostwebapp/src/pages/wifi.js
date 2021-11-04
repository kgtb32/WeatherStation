import { React, useState } from "react";
import { useTranslation } from "react-i18next";

import { Container, Col, Row, InputGroup, Form } from 'react-bootstrap'

import Bouttonnavigation from "../component/bouttonnavigation.js"

import imgWifi from '../assets/wifi.svg'

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
          <Container className="text-center">
            <h1 style={{fontWeight: "500",color: "black"}}>{t("Wifi.Wifi")}</h1>
            <img src={imgWifi} alt="" className="w-50 h-auto mx-auto d-flex py-5"/>
          </Container>           
            <Container style={{ backgroundColor: "lightgray" }} className="py-3 my-4 rounded">
            <p style={{fontWeight: "500",color: "black"}}>{t("Wifi.Name")}</p>
              <InputGroup className="mb-3" onChange={(e) => {wifinameText(e)}}>
                <Form.Control
                  placeholder={t("Wifi.Name")}
                  aria-label="Localisation"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <p style={{fontWeight: "500",color: "black"}}>{t("Wifi.Password")}</p>
              <InputGroup className="mb-3" onChange={(e) => {passwordText(e)}}>
                <Form.Control
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
