import React from "react";
import { CounterStrikeDetails } from "./ActivityInformation/CounterStrike1.6/CounterStrikeDetails";
import { OtherGamesDetails } from "./ActivityInformation/OtherGames/OtherGamesDetails";
import "./GameDetails.css";

export const GameDetails = () => {
  return (
    <div className="player-playtime-details">
      <CounterStrikeDetails />
      <OtherGamesDetails />
    </div>
  );
};
