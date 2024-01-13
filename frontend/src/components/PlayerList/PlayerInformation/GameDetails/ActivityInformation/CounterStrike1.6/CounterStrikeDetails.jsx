import React from "react";
import { useGlobalContext } from "../../../../../../context";
import { calculateRoundedPlaytime } from "../../../../../../utils/caluculate-playtime";
import "./CounterStrikeDetails.css";

export const CounterStrikeDetails = () => {
  const { playerGames } = useGlobalContext();

  const hasGames = playerGames?.games && playerGames.games.length > 0;

  const hasPlaytime2Weeks =
    hasGames && playerGames.games[0].playtime_2weeks !== undefined;
  const hasPlaytimeForever =
    hasGames && playerGames.games[0].playtime_forever !== undefined;

  return (
    <div className={hasGames?"last-activity-container":"last-activity-container-blured"}>
      <div className="last-activity">
        <div className="last-activity-text">Ostatnia aktywność</div>
        <div className="last-activity-summary">
          {hasPlaytime2Weeks
            ? calculateRoundedPlaytime(playerGames.games[0].playtime_2weeks)
            : "brak "}
          {" "} godz. w ciągu ostatnich 2 tygodni
        </div>
      </div>
      <div className="recently-games">
        <div className="game-name-container">
          <div className="game-logo">
            <img
              src={require("../../../../../../images/cs-img.jpg")}
              alt="counter-strike"
            />
          </div>
          <div className="game-name">Counter-Strike</div>
        </div>
        <div className="game-information">
          <div className="activity">
            <p>
              <span>Czas gry:</span>
              {hasPlaytimeForever
                ? calculateRoundedPlaytime(playerGames.games[0].playtime_forever)
                : "brak "}
              {" "} godz. łącznie
            </p>
            <p>
              <span>Ostatnia gra:</span>{" "}
              {hasPlaytime2Weeks
                ? "w tym tygodniu"
                : "dawniej niż 2 tygodnie temu"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
