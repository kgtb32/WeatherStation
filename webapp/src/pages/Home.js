import React from "react";
import { useTranslation } from "react-i18next";

import TopBar from "../components/TopBar/TopBar";
import ChartData from "../components/ChartData/ChartData";
import i18n from "../i18n";

function Home() {
  const { t } = useTranslation();
    
    return (
        <div className="w-100">
            <TopBar />
            <p onClick={() => {
                i18n.changeLanguage('en')
            }}>{t('langName')}</p>
        </div>
    )
}

export default Home;
