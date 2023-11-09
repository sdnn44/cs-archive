import React from "react";

import './GameDetails.css';

export const GameDetails = () => {
  return (
    <div className="player-playtime-details">
      <div className="last-activity">
        <div className="last-activity-text">Ostatnia aktywność</div>
        <div className="last-activity-summary">
          16.7 godz. w ciągu ostatnich 2 tygodni
        </div>
      </div>
      <div className="recently-games">
        <div className="game-name-container">
          <div className="game-logo">
            <img
              src={require("../../../../images/cs-img.jpg")}
              alt="counter-strike"
            />
          </div>
          <div className="game-name">Counter-Strike</div>
        </div>
        <div className="game-information">
          <div className="activity">
            <p>
              <span>Czas gry:</span> 1,982 godz. łącznie
            </p>
            <p>
              <span>Ostatnia gra:</span> 21 października
            </p>
          </div>
        </div>
      </div>
      <div className="other-activity">
        <h4>Pozostała aktywność:</h4>
        <div className="other-activity-game">
          <div className="other-activity-game-container">
            <div className="other-activity-game-logo">
              <img
                src={require("../../../../images/cs2-logo.jpg")}
                alt="counter-strike"
              />
            </div>
            <div className="other-activity-name">Counter-Strike 2</div>
            <div className="game-information">
              <div className="activity">
                <p>
                  <span>Czas gry:</span> 1,982 godz. łącznie.
                </p>
                <p>
                  <span>Pozostałe 2 tygodnie:</span> 0.
                </p>
              </div>
            </div>
          </div>
          <div className="other-activity-game-container">
            <div className="other-activity-game-logo">
              <img
                src={require("../../../../images/css-icon.png")}
                alt="counter-strike"
              />
            </div>
            <div className="other-activity-name">Counter-Strike: Source</div>
            <div className="game-information">
              <div className="activity">
                <p>
                  <span>Czas gry:</span> 1,982 godz. łącznie.
                </p>
                <p>
                  <span>Pozostałe 2 tygodnie:</span> 0.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
