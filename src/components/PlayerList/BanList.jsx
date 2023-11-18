import { child, get, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { db } from "../../firebase";
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

  /*
    weź steamID
    sprawdź czy w strefaskilla dd2 jest sid w bansie
      jesli nie to status `brak bana`
      jesli tak to status ` aktywny ban`
        wypisz rzeczy z bazy na front
    sprawdz czy w strefaskilla cod jest sid w bansie
    ...
  */

  const [data, setDataStrefaCod] = useState([]);
  const [dataStrefaDD2, setDataStrefaDD2] = useState([]);

  useEffect(() => {
    fetchData("bans/strefaskillacod/", setDataStrefaCod, searchId);
    fetchData("bans/strefaskilladd2/", setDataStrefaDD2, searchId);
  }, [steamID]);

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-title">
          <div className="website-container">
            <img src={require("../../images/strefaskilla.png")} alt="avatar" />
            <div className="website-info">
              <h2>https://strefaskilla.pl/</h2>
              <p>only dd2 #1</p>
            </div>
          </div>
        </div>

        <div className="ban-details">
          <p>
            {" "}
            <span>Nick:</span> {dataStrefaDD2 && dataStrefaDD2["Nick"]}{" "}
          </p>
          <p>
            {" "}
            <span>SteamID:</span> {dataStrefaDD2 && dataStrefaDD2["SteamID"]}{" "}
          </p>
          <p>
            {" "}
            <span>SteamCommunity ID:</span> {dataStrefaDD2 && dataStrefaDD2["SteamCommunity ID"]} {" "}
          </p>
          <p>
            {" "}
            <span>Powód:</span> {dataStrefaDD2 && dataStrefaDD2["Powód Bana"]}{" "}
          </p>
          <p>
            {" "}
            <span>Wykonano dnia:</span> {dataStrefaDD2 && dataStrefaDD2["Wykonano"]}{" "}
          </p>
          <p>
            {" "}
            <span>Zbanowany przez:</span> {dataStrefaDD2 && dataStrefaDD2["Zbanowny przez"]}{" "}
          </p>
        </div>

        <div className="status-banned">
          <a className="player-avatar" href="#1234">
            <img src={require("../../images/avatar.jpg")} alt="avatar" />
            {/* <img src={require('./pies.png')} alt="avatar"/> */}
          </a>
          <svg className="half-circle-banned" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="player-status">
            <div className="player-status-prefix">Status</div>
            Aktywne bany!
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <div className="website-container">
            <img src={require("../../images/strefaskilla.png")} alt="avatar" />
            <div className="website-info">
              <h2>https://strefaskilla.pl/</h2>
              <p>cod mod 201</p>
            </div>
          </div>
        </div>
        <div className="ban-details">
          <p>
            {" "}
            <span>Nick:</span> {data && data["Nick"]}{" "}
          </p>
          <p>
            {" "}
            <span>SteamID:</span> {data && data["SteamID"]}{" "}
          </p>
          <p>
            {" "}
            <span>SteamCommunity ID:</span> {data && data["SteamCommunity ID"]} {" "}
          </p>
          <p>
            {" "}
            <span>Powód:</span> {data && data["Powód Bana"]}{" "}
          </p>
          <p>
            {" "}
            <span>Wykonano dnia:</span> {data && data["Wykonano"]}{" "}
          </p>
          <p>
            {" "}
            <span>Zbanowany przez:</span> {data && data["Zbanowny przez"]}{" "}
          </p>
        </div>

        <div className="status-banned">
          <a className="player-avatar" href="#1234">
            <img src={require("../../images/avatar.jpg")} alt="avatar" />
            {/* <img src={require('./pies.png')} alt="avatar"/> */}
          </a>
          <svg className="half-circle-banned" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="player-status">
            <div className="player-status-prefix">Status</div>
            Aktywne bany!
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <div className="website-container">
            <img src={require("../../images/strefaskilla.png")} alt="avatar" />
            <div className="website-info">
              <h2>https://strefaskilla.pl/</h2>
              <p>only dd2 #1</p>
            </div>
          </div>
        </div>

        <div className="status">
          <a className="player-avatar" href="#1234">
            <img src={require("../../images/avatar.jpg")} alt="avatar" />
            {/* <img src={require('./pies.png')} alt="avatar"/> */}
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="player-status">
            <div className="player-status-prefix">Status</div>
            Brak bana
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <div className="website-container">
            <img src={require("../../images/strefaskilla.png")} alt="avatar" />
            <div className="website-info">
              <h2>https://strefaskilla.pl/</h2>
              <p>only dd2 #1</p>
            </div>
          </div>
        </div>

        <div className="status">
          <a className="player-avatar" href="#1234">
            <img src={require("../../images/avatar.jpg")} alt="avatar" />
            {/* <img src={require('./pies.png')} alt="avatar"/> */}
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="player-status">
            <div className="player-status-prefix">Status</div>
            Brak bana
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <div className="website-container">
            <img src={require("../../images/strefaskilla.png")} alt="avatar" />
            <div className="website-info">
              <h2>https://strefaskilla.pl/</h2>
              <p>only dd2 #1</p>
            </div>
          </div>
        </div>

        <div className="status">
          <a className="player-avatar" href="#1234">
            <img src={require("../../images/avatar.jpg")} alt="avatar" />
            {/* <img src={require('./pies.png')} alt="avatar"/> */}
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="player-status">
            <div className="player-status-prefix">Status</div>
            Brak bana
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <div className="website-container">
            <img src={require("../../images/strefaskilla.png")} alt="avatar" />
            <div className="website-info">
              <h2>https://strefaskilla.pl/</h2>
              <p>only dd2 #1</p>
            </div>
          </div>
        </div>

        <div className="status">
          <a className="player-avatar" href="#1234">
            <img src={require("../../images/avatar.jpg")} alt="avatar" />
            {/* <img src={require('./pies.png')} alt="avatar"/> */}
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="player-status">
            <div className="player-status-prefix">Status</div>
            Brak bana
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <div className="website-container">
            <img src={require("../../images/strefaskilla.png")} alt="avatar" />
            <div className="website-info">
              <h2>https://strefaskilla.pl/</h2>
              <p>only dd2 #1</p>
            </div>
          </div>
        </div>

        <div className="status">
          <a className="player-avatar" href="#1234">
            <img src={require("../../images/avatar.jpg")} alt="avatar" />
            {/* <img src={require('./pies.png')} alt="avatar"/> */}
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div className="player-status">
            <div className="player-status-prefix">Status</div>
            Brak bana
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanList;
