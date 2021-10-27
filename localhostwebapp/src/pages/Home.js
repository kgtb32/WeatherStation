import React from "react";
import logo from "../logo.gif";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";

import ReactCountryFlag from "react-country-flag";
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
          <ReactCountryFlag
            countryCode="GB"
            svg
            style={{
              width: "2em",
              height: "2em",
              marginRight:"10px"
            }}
            title="US"
          />{" "}
          {t("Home.English")}
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            i18n.changeLanguage("fr");
          }}
        >
          <ReactCountryFlag
            countryCode="FR"
            svg
            style={{
              width: "2em",
              height: "2em",
              marginRight:"14px"
            }}
            title="US"
          />
          {t("Home.French")}
        </Dropdown.Item>
      </DropdownButton>
      
      <Bouttonnavigation url="/welcome" text={t("Home.Next")}></Bouttonnavigation>
      
    </div>
  );
}
