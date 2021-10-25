import React, { createContext, useState, useContext } from "react";

import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

import app from "../config/firebase.js";
import dayjs from "dayjs";

export const context = createContext();

export function DataContext() {
  return useContext(context);
}

export const ContextProvider = (props) => {
  const [dataWeather, setDataWeather] = useState([]);

  const fetchData = async () => {
    const db = getFirestore(app);

    const q = query(
      collection(db, "meteo"),
      where("shouldValBeUsed", "==", true),
      orderBy("dateEpoch")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let newState = [];
      querySnapshot.forEach((doc) => {
        const value = doc.data();
        const convertDate = dayjs(value.dateEpoch * 1000);
        newState.push({
          humidity: value.humidity,
          pressure: value.pressure,
          temperature: value.temperature,
          date: convertDate,
        });
      });
      setDataWeather(newState);
    });
  };

  return (
    <context.Provider
      value={{
        dataWeather,
        fetchData,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
