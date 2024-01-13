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
      console.log(snapshot.val());
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
  const [dataLuzownia, setDataLuzownia] = useState([]);
  const [dataFragujemy, setDataFragujemy] = useState([]);
  const [dataKatujemy, setDataKatujemy] = useState([]);
  const [dataMaliver, setDataMaliver] = useState([]);
  const [dataCsowicze, setDataCsowicze] = useState([]);
  const [data1s2k, setData1s2k] = useState([]);

  useEffect(() => {
    fetchData("bans/strefaskillacod/", setDataStrefaCod, searchId);
    fetchData("bans/strefaskilladd2/", setDataStrefaDD2, searchId);
    fetchData("bans/psychasiada1/", setDataPsychasiada1, searchId);
    fetchData("bans/psychasiada2/", setDataPsychasiada2, searchId);
    fetchData("bans/giniemyzhonorem/", setDataGiniemyzhonorem, searchId);
    fetchData("bans/bandaskilla/", setDataBandaskilla, searchId);
    fetchData("bans/gamefuture1/", setDataGamefuture1, searchId);
    fetchData("bans/gamefuture2/", setDataGamefuture2, searchId);
    fetchData("bans/fragarena/", setDataFragarena, searchId);
    fetchData("bans/luzownia/", setDataLuzownia, searchId);
    fetchData("bans/fragujemy/", setDataFragujemy, searchId);
    fetchData("bans/katujemy/", setDataKatujemy, searchId);
    fetchData("bans/maliver/", setDataMaliver, searchId);
    fetchData("bans/csowicze/", setDataCsowicze, searchId);
    fetchData("bans/1shot2kill/", setData1s2k, searchId);
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
