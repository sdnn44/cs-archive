import React from "react";
import "./PlayerStatus.css";
import GavelIcon from '@mui/icons-material/Gavel';

const PlayerStatus = () => {
  return (
    <div className="player-container">
      <div className="player-details">
        <div className="player-title">
          <div className="title-text">O graczu</div>
          <div className="player-level">12 Poziom Steam</div>
        </div>

        <div className="player-information-container">
          <img src={require("../../images/strefaskilla.png")} alt="avatar" />
          <div className="player-information">
            <h2>slajden^_^</h2>
            <h4>Online</h4>
            <div className="player-information-text">
              <div className="ban-otherview">
                <p>VAC: <GavelIcon color='success'/></p>
                <p>Community bans: <GavelIcon color='error'/></p>
                <p>Game bans: <GavelIcon color='success'/></p>
                <p>Trade bans: <GavelIcon color='success'/></p>
              </div>
              <div className="detailed-information">
                <p><span>Steam ID:</span> STEAM_0:1:44683055</p>
                <p><span>Community ID:</span>  STEAM_0:1:44683055</p>
                <p><span>Dane osobowe: </span>  STEAM_0:1:44683055</p>
                <p><span>Skąd:</span>  STEAM_0:1:44683055</p>
                <p>Steam member since: 27/09/2011</p>
                <p> Member for: 12 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStatus;
