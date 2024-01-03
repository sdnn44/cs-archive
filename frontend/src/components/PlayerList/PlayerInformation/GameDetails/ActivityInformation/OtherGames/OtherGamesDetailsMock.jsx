import React from "react";
import { gamesData } from "../../../../../../data/games";
import "./OtherGamesDetails.css";

const GameDetails = ({ logo, name, totalPlaytime, recentPlaytime }) => {
  return (
    <div className="other-activity-game-container-blur">
      <div className="other-activity-game-logo-blur">
        <img src={logo} alt={name} />
      </div>
      <div className="other-activity-name-blur">{name}</div>
      <div className="game-information">
        <div className="activity">
          <p>
            <span>Czas gry:</span> {totalPlaytime}
          </p>
          <p>
            <span>Ostatnie 2 tygodnie:</span> {recentPlaytime}
          </p>
        </div>
      </div>
    </div>
  );
};

export const OtherGamesDetailsMock = ({ index }) => {
  const game = gamesData[index - 1];
  if (game) {
    const { logo, name, totalPlaytime, recentPlaytime } = game;
    console.log(totalPlaytime)
    // const totalPlaytime = playtime_forever ? calculateRoundedPlaytime(playtime_forever) + ` godz łącznie.` : "brak danych.";
    // const recentPlaytime = playtime_2weeks ? calculateRoundedPlaytime(playtime_2weeks) + ` godzin.` : "0 godzin.";

    return (
      <GameDetails
        logo={logo}
        name={name}
        totalPlaytime={totalPlaytime}
        recentPlaytime={recentPlaytime}
      />
    );
  } else {
    return (
      <div className="other-activity-game-blur">
        Brak danych dla tego indeksu.
      </div>
    );
  }
};
