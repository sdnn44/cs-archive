import React from "react";
import { PlayerAmount } from "../Playerbase/PlayerAmount";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header-box">
        <div className="header-content">
          <h2 className="header-title">
            znajdź aktywne bany gracza z sieci serwerów
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

export default Header;
