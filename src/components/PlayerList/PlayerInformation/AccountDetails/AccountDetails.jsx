import React from "react";
import { useGlobalContext } from "../../../../context";
import { useParams } from "react-router-dom";
import "./AccountDetails.css";
import { Loading } from "../../../Loader/Loader";
import { calculateTimeElapsed, unixTimestampToDateTime } from "../../../../utils/unix-timestamp-to-date";
import { SteamBanOtherview } from "./SteamBanOtherview";

export const AccountDetails = () => {
  const { searchId, player, loading } = useGlobalContext();
  const { steamID } = useParams();

  return (

        <div className="player-details">
          <div className="player-title">
            <div className="title-text">O graczu</div>
            <div className="player-level">12 Poziom Steam</div>
          </div>

          <div className="player-information-container">
            <div className="player-information">
              <div className="player-information-header">
                <div className="player-information-avatar">
                  <img src={player?.avatarfull} alt="avatar" />
                </div>
                <div className="player-name-status">
                  <h2>{player?.personaname?(player.personaname):(`brak informacji`)}</h2>
                  <h4>Online</h4>
                </div>
              </div>

              <div className="player-information-text">
                <SteamBanOtherview />
                <div className="detailed-information">
                  <p>
                    <span>Steam ID:</span> {steamID}
                  </p>
                  <p>
                    <span>Community ID:</span> {player?.steamid?player.steamid:`brak informacji`}
                  </p>
                  <p>
                    <span>Dane osobowe: </span> {player?.realname?player.realname:`brak informacji`}
                  </p>
                  <p>
                    <span>Skąd:</span> {player?.loccityid?(player.loccityid):(`brak informacji`)}
                  </p>
                  <p>
                    <span>Konto utworzone:</span> {player?.timecreated?(unixTimestampToDateTime(player?.timecreated)):(`brak informacji`)}
                  </p>
                  <p>
                    <span>Członek od:</span> {player?.timecreated?(calculateTimeElapsed(player?.timecreated)):(`brak informacji`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};
