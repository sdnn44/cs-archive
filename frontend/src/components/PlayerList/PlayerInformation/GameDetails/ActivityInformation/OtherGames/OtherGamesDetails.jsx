import React from "react";
import { useGlobalContext } from "../../../../../../context";
import { gamesData } from "../../../../../../data/games";
import { calculateRoundedPlaytime } from "../../../../../../utils/caluculate-playtime";
import { Loading } from "../../../../../Loader/Loader";
import "./OtherGamesDetails.css";
import { OtherGamesDetailsMock } from "./OtherGamesDetailsMock";

const GameSection = ({ game, playerGames }) => {
  const { name, logo, index } = game;
  console.log(index);
  return (
    <div className="other-activity-game-container">
      {playerGames.games[index] ? (
        <>
          <div className="other-activity-game-logo">
            <img src={logo} alt={name} />
          </div>
          <div className="other-activity-name">{name}</div>
          <div className="game-information">
            <div className="activity">
              <p>
                <span>Czas gry:</span>{" "}
                {playerGames.games[index].playtime_forever
                  ? calculateRoundedPlaytime(
                      playerGames.games[index].playtime_forever
                    ) + ` godz łącznie.`
                  : "brak danych."}
              </p>
              <p>
                <span>Ostatnie 2 tygodnie:</span>{" "}
                {playerGames.games[index].playtime_2weeks
                  ? calculateRoundedPlaytime(
                      playerGames.games[index].playtime_2weeks
                    ) + ` godzin.`
                  : "0 godzin."}
              </p>
            </div>
          </div>
        </>
      ) : (
        <OtherGamesDetailsMock index={index} />
      )}
    </div>
  );
};

export const OtherGamesDetails = () => {
  const { playerGames } = useGlobalContext();
  const isPlayerGamesAvailable =
    playerGames && playerGames?.games && playerGames.games.length > 1;

  return (
    <div className="other-activity">
      <h4>Pozostała aktywność:</h4>
      {!isPlayerGamesAvailable ? (
        <><OtherGamesDetailsMock index={1} /><OtherGamesDetailsMock index={2} /></>
      ) : (
        <div className="other-activity-game">
          {gamesData.map((game) => (
            <GameSection
              key={game.index}
              game={game}
              playerGames={playerGames}
            />
          ))}
        </div>
      )}
    </div>
  );
};
