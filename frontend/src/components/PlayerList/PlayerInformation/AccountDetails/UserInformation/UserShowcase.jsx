import React from "react";
import { useGlobalContext } from "../../../../../context";
import "./UserShowcase.css";

export const UserShowcase = () => {
  const { player } = useGlobalContext();

  const getStatusText = (state) => {
    switch (state) {
      case 0:
        return {text: "Offline", className: "grey"};
      case 1:
        return {text: "Online", className: ""};
      case 2:
        return {text: "Busy", className: ""};
      case 3:
        return {text: "Away", className: ""};
      case 4:
        return {text: "Snooze", className: ""};
      case 5:
        return {text: "Looking to trade", className: ""};
      case 6:
        return {text: "Looking to play", className: ""};
      default:
        return {text: "Unknown Status", className: ""};
    }
  };

  const status = getStatusText(player?.personastate);
  
  return (
    <div className="player-information-header">
      <div className="player-information-avatar">
        <img className={status.className} src={player?.avatarfull} alt="avatar" />
      </div>
      <div className="player-name-status">
        <h2>{player?.personaname ? player.personaname : `brak informacji`}</h2>
        <h4 className={status.className}>{status.text}</h4>
      </div>
    </div>
  );
};
