import React from 'react';

import { FormControl, Col, Row, Container } from 'react-bootstrap';

import { useTranslation } from "react-i18next";
import Bouttonnavigation from "../component/bouttonnavigation.js"
import axios from 'axios';

import imgCredentials from '../assets/database.svg'

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
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "stretch",
            }}
          >
          <Container className="text-center py-3">
            <h1 style={{fontWeight: "500",color: "black"}}>{t("Credential.Credential")}</h1>
            <img src={imgCredentials} alt="" className="w-50 h-auto mx-auto d-flex py-5"/>
            <p>{t('Credential.desc')}</p>
            <a href="">{t('Credential.howToGenerate')}</a>
          </Container>
         
            <Container style={{ backgroundColor: "lightgray" }} className="py-5 my-4 rounded ">
            <p style={{fontWeight: "500",color: "black"}}>{t("Credential.Import")}</p>
            <FormControl type="file" name="file" onChange={(e)=>onChange(e)}/>
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
