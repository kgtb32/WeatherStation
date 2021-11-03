import React from "react";
import logo from "../logo.gif";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import english from '../icons/english.png';
import french from '../icons/french.png'

import Bouttonnavigation from '../component/bouttonnavigation.js';

import i18n from "../i18n";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <DropdownButton
        className="Dropdown"
        id="dropdown-basic-button"
        title={t("Home.Language")}
      >
        <Dropdown.Item
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          <img src={english} className="App-logo" alt="logo" style={{height:"5vh"}}/>
          {t("Home.English")}
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            i18n.changeLanguage("fr");
          }}
        >
          <img src={french} className="App-logo" alt="logo" style={{height:"5vh"}}/>
          {t("Home.French")}
        </Dropdown.Item>
      </DropdownButton>
      
      <Bouttonnavigation url="/welcome" text={t("Home.Next")}></Bouttonnavigation>
      
    </div>
  );
}
