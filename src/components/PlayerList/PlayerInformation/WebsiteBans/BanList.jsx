import { child, get, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../../../context";
import cardData from "../../../../data/ban-data";
import { db } from "../../../../firebase";
import { Card } from "./BanCard";
import "./BanList.css";

const fetchData = async (path, setDataFunction, id) => {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `${path}${id}`));

    if (snapshot.exists()) {
      setDataFunction(snapshot.val());
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
};

const BanList = () => {
  const { searchId } = useGlobalContext();
  const { steamID } = useParams();

  const [dataStrefaCOD, setDataStrefaCod] = useState([]);
  const [dataStrefaDD2, setDataStrefaDD2] = useState([]);

  useEffect(() => {
    fetchData("bans/strefaskillacod/", setDataStrefaCod, searchId);
    fetchData("bans/strefaskilladd2/", setDataStrefaDD2, searchId);
  }, [steamID]);


  const cardDataWithStatus = cardData.map(card => {
    const dataKey = card.dataKey;
    const currentData = eval(dataKey);
    const isDataEmpty = Array.isArray(currentData) && currentData.length === 0;

    return {
      ...card,
      status: {
        className: isDataEmpty ? "status" : "status-banned",
        svgClassName: isDataEmpty ? "half-circle" : "half-circle-banned",
        text: isDataEmpty ? "Brak bana" : "Aktywne bany!",
      },
    };
  });

  return (
    <div className="card-container">
      {cardDataWithStatus.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          websiteImg={card.websiteImg}
          data={eval(card.dataKey)}
          status={card.status}
          href={card.href}
        />
      ))}
    </div>
  );
};

export default BanList;
