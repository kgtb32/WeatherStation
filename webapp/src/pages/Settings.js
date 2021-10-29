import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";


export default function Settings() {
    const { t } = useTranslation();
    
    return (
        <div className="w-100">
            <p
                onClick={() => {
                    i18n.changeLanguage("en");
                }}
            >
                {t("langName")}
            </p>
        </div>
    );
}
