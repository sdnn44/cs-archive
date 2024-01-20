import React from "react";
import "./PlayerAmount.css";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import LanguageIcon from "@mui/icons-material/Language";

export const PlayerAmount = () => {
  return (
    <div className="player-amount-container">
      <div className="player-amount">
        <div className="pulse">
          <PersonOffIcon sx={{fontSize: "3.5rem"}}/>
        </div>{" "}
        <div className="player-amount-text"><div className="count">2996</div> graczy</div>
      </div>
      <div className="website-amount">
        <div className="pulse">
          <LanguageIcon sx={{fontSize: "3.5rem"}} />
        </div>{" "}
        <div className="website-amount-text"><div className="count">13</div> sieci</div>
      </div>
    </div>
  );
};
