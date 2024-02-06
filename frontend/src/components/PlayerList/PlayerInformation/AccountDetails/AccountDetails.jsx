import React from "react";
import { useGlobalContext } from "../../../../context";
import { useParams } from "react-router-dom";
import "./AccountDetails.css";
import { Loading } from "../../../Loader/Loader";
import { SteamBanOtherview } from "./AccountBans/SteamBanOtherview";
import { UserInformation } from "./UserInformation/UserInformation";
import { UserShowcase } from "./UserInformation/UserShowcase";

export const AccountDetails = () => {
  const { steamLevel } = useGlobalContext();

  const isProfilePrivate = steamLevel && steamLevel.player_level === undefined;

  return (
    <div className="player-details">
      <div className="player-title">
        <div className="title-text">O graczu</div>
        {/* <div className="level-text">Poziom Steam</div> */}
        <div
          className={`player-level badge purple ${
            isProfilePrivate ? "blured" : ""
          }`}
        >
          <div className="circle">
            <span>{isProfilePrivate ? 0 : steamLevel?.player_level}</span>Poziom
          </div>
        </div>
      </div>

      <div className="player-information-container">
        <div className="player-information">
          <UserShowcase />
          <div className="player-information-text">
            <SteamBanOtherview />
            <UserInformation />
          </div>
        </div>
      </div>
    </div>
  );
};
