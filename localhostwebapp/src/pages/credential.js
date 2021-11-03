import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import Bouttonnavigation from "../component/bouttonnavigation.js"
import axios from 'axios';

export default function Credential() {
  const { t } = useTranslation();

  const onChange=(e)=>{
    const data = new FormData() 
    data.append('file', e.target.files[0]);
    

    axios.post("http://127.0.0.1:5000/cred/set", data, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res.data)
      })
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
          <Container><h1 style={{fontWeight: "500",color: "black"}}>{t("Credential.Credential")}</h1></Container>
         
            <Container style={{ backgroundColor: "lightgray" }}>
            <p style={{fontWeight: "500",color: "black"}}>{t("Credential.Import")}</p>
            <input type="file" name="file" onChange={(e)=>onChange(e)}/>
            </Container>
            <Container style={{display: "flex",justifyContent: "flex-end"}}>
            <Bouttonnavigation url="/wifi" text={t("Welcome.Next")}></Bouttonnavigation>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
