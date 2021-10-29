import React, { createContext, useState, useContext } from "react";

import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  limit
} from "firebase/firestore";

import app from "../config/firebase.js";
import dayjs from "dayjs";

export const context = createContext();

export function DataContext() {
  return useContext(context);
}

export const ContextProvider = (props) => {
  const [dataWeather, setDataWeather] = useState([]);
  const [realTimeData, setRealTimeData] = useState({});
  const optionsDate = { year: 'numeric', month: 'numeric', day: 'numeric', hour:'numeric', minute: 'numeric', second:'numeric'};

  const fetchDataRangeDate = async (dateRange, shouldValBeUsed) => {
    const db = getFirestore(app);
    const q = query(
      collection(db, "meteo"),
      where("shouldValBeUsed", "==", shouldValBeUsed),
      where("dateEpoch", ">=", dateRange + ""),
      orderBy("dateEpoch")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let newState = [];
      querySnapshot.forEach((doc) => {
        const value = doc.data();
        const convertDate = dayjs(value.dateEpoch * 1000);
        const stringDate = convertDate.$d
        const frenchDate = stringDate.toLocaleDateString('fr-FR', optionsDate)
        newState.push({
          humidity: value.humidity,
          pressure: value.pressure,
          temperature: value.temperature,
          date: frenchDate,
        });
      });
      setDataWeather(newState);
    });
  };

  const fetchDataRealTime = async () => {
    const db = getFirestore(app);
    const q = query(
      collection(db, "meteo"),
      orderBy("dateEpoch", "desc"),
      limit(1)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const value = doc.data();
        const convertDate = dayjs(value.dateEpoch * 1000);
        const stringDate = convertDate.$d
        const frenchDate = stringDate.toLocaleDateString('fr-FR', optionsDate)
        setRealTimeData({
          humidity: value.humidity,
          pressure: value.pressure,
          temperature: value.temperature,
          date: frenchDate,
        })
      });
    });
  };

  return (
    <context.Provider
      value={{
        dataWeather,
        fetchDataRangeDate,
        fetchDataRealTime,
        realTimeData
      }}
    >
      {props.children}
    </context.Provider>
  );
};
