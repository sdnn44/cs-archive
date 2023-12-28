import React from "react";
import "./BanCard.css";

export const Card = ({ title, subtitle, websiteImg, data, status, href }) => {
  return (
    <div className="card">
      <div className="card-title">
        <div className="website-container">
          <img src={websiteImg} alt="avatar" />
          <div className="website-info">
            <h2><a href={title}>{title}</a></h2>
            <p><a href={href}>{subtitle}</a></p>
          </div>
        </div>
      </div>
      <div className="ban-details">
        {data.length !== 0 ? (
          <>
            <p>
              {" "}
              <span>Nick:</span> {data && (data["Nick"] || data["Nick gracza"] || data["Nazwa Gracza"])}{" "}
            </p>
            <p>
              {" "}
              <span>SteamID:</span> {data && (data["SteamID"] || data["SteamID gracza"] || data["Steam  gracz"] || data["Steam Gracza"])}{" "}
            </p>
            {/* <p>
              {" "}
              <span>SteamCommunity ID:</span>{" "}
              {data && data["SteamCommunity ID"]}{" "}
            </p> */}
            <p>
              {" "}
              <span>Powód:</span> {data && (data["Powód Bana"] || data["Powód"] || data["Powód bana"] || data["Powód Blokady"])}{" "}
            </p>
            <p>
              {" "}
              <span>Wykonano dnia:</span> {data && (data["Wykonano"] || data["Data"] || data["Data bana"] || data["Data Nadania"])}{" "}
            </p>
            <p>
              {" "}
              <span>Zbanowany przez:</span> {data && (data["Zbanowny przez"] || data["Admin"])}{" "}
            </p>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className={status.className}>
        <a className="player-avatar" href={status.href}>
          <img src={require("../../../../images/avatar.jpg")} alt="avatar" />
        </a>
        <svg className={status.svgClassName} viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>
        <div className="player-status">
          <div className="player-status-prefix">Status</div>
          {status.text}
        </div>
      </div>
    </div>
  );
};
