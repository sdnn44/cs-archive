import { child, get, ref } from "@firebase/database";
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
    } else {
      console.log("Player has no active bans");
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
  const [dataPsychasiada1, setDataPsychasiada1] = useState([]);
  const [dataPsychasiada2, setDataPsychasiada2] = useState([]);
  const [dataGiniemyzhonorem, setDataGiniemyzhonorem] = useState([]);
  const [dataBandaskilla, setDataBandaskilla] = useState([]);
  const [dataGamefuture1, setDataGamefuture1] = useState([]);
  const [dataGamefuture2, setDataGamefuture2] = useState([]);
  const [dataFragarena, setDataFragarena] = useState([]);
  const [dataFragarena2, setDataFragarena2] = useState([]);
  const [dataLuzownia, setDataLuzownia] = useState([]);
  const [dataFragujemy, setDataFragujemy] = useState([]);
  const [dataKatujemy, setDataKatujemy] = useState([]);
  const [dataMaliver, setDataMaliver] = useState([]);
  const [dataCsowicze, setDataCsowicze] = useState([]);
  const [dataCsowiczeDD2, setDataCsowiczeDD2] = useState([]);
  const [data1s2k, setData1s2k] = useState([]);

  useEffect(() => {
    fetchData("bans/strefaskillacod/", setDataStrefaCod, steamID);
    fetchData("bans/strefaskilladd2/", setDataStrefaDD2, steamID);
    fetchData("bans/psychasiada1/", setDataPsychasiada1, steamID);
    fetchData("bans/psychasiada2/", setDataPsychasiada2, steamID);
    fetchData("bans/giniemyzhonorem/", setDataGiniemyzhonorem, steamID);
    fetchData("bans/bandaskilla/", setDataBandaskilla, steamID);
    fetchData("bans/gamefuture1/", setDataGamefuture1, steamID);
    fetchData("bans/gamefuture2/", setDataGamefuture2, steamID);
    fetchData("bans/fragarena/", setDataFragarena, steamID);
    fetchData("bans/fragarena2/", setDataFragarena2, steamID);
    fetchData("bans/luzownia/", setDataLuzownia, steamID);
    fetchData("bans/fragujemy/", setDataFragujemy, steamID);
    fetchData("bans/katujemy/", setDataKatujemy, steamID);
    fetchData("bans/maliver/", setDataMaliver, steamID);
    fetchData("bans/csowicze/", setDataCsowicze, steamID);
    fetchData("bans/csowiczedd2/", setDataCsowiczeDD2, steamID);
    fetchData("bans/1shot2kill/", setData1s2k, steamID);
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