import React from "react";
import { useGlobalContext } from "../../context";
import "./BanList.css";

const BanList = () => {

  const { searchId } = useGlobalContext();


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
              <p>cod mod 201</p>
            </div>
          </div>
        </div>

        <div className="ban-details">
          <p> <span>Nick:</span> y_y </p> 
          <p> <span>SteamID:</span> STEAM_0:0:102774884 </p>
          <p> <span>SteamCommunity ID:</span> 76561198165815496 </p>
          <p> <span>Powód:</span> Wstaw screeny na Strefa Skilla. </p>
          <p> <span>Wykonano dnia:</span> 10.03.2023 - 21:58:23 </p>
          <p> <span>Zbanowany przez:</span> ALCMDZ </p>
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
