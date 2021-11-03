import React from "react";
import logo from "../logo.gif";
import { Dropdown } from "react-bootstrap";

import { useTranslation } from "react-i18next";

import {IconFlagFR, IconFlagUK } from 'material-ui-flags'

import Bouttonnavigation from '../component/bouttonnavigation.js';

import i18n from "../i18n";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-black">
      	<img src={logo} className="App-logo" alt="logo" />
      </div>
      <Dropdown className="my-2">
		<Dropdown.Toggle>
			{t('langName') ?? 'en' == 'fr' ? <IconFlagFR /> : <IconFlagUK />}
			<p className="mx-1 d-inline">{t("localizedLangName")}</p>
		</Dropdown.Toggle>
		<Dropdown.Menu>
			<Dropdown.Item
			onClick={() => {
				i18n.changeLanguage("en");
			}}
			>
			<IconFlagUK className="mx-1"/>
			{t("Home.English")}
			</Dropdown.Item>
			<Dropdown.Item
			onClick={() => {
				i18n.changeLanguage("fr");
			}}
			>
			<IconFlagFR className="mx-1"/>
			{t("Home.French")}
			</Dropdown.Item>
		</Dropdown.Menu>
        
      </Dropdown>
      <Bouttonnavigation url="/welcome" text={t("Home.Next")}></Bouttonnavigation>
      
    </div>
  );
}
