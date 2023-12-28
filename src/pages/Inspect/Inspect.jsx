import React from "react";
import Ornament from "../../components/Ornament/Ornament";
import { PlayerAmount } from "../../components/Playerbase/PlayerAmount";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./Inspect.css";

const Inspect = () => {
  return (
    <div className="header-container" id="inspect-player">
      <Ornament />
      <header className="header-box">
        <div className="header-content">
          <h2 className="header-title">
            Znajdź aktywne bany gracza z sieci serwerów
          </h2>{" "}
          <br />
          <div className="box">
            <div className="search-box">
              <div className="search-box-text">
                <p className="header-text">
                  Convert words to images with Fotor's free AI image generator.
                  Watch your imagination transform into AI-generated images
                  online. Free text to image AI generator, save time on creating
                  or searching for the perfect image.
                </p>
              </div>
              <SearchForm />
            </div>
          </div>
          <PlayerAmount />
        </div>
      </header>
    </div>
  );
};

export default Inspect;
