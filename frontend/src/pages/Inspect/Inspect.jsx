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
                  Wszystkie bany w jednym miejscu. Wprowadź identyfikator Steam
                  w poniższym pasku wyszukiwania, aby uzyskać dostęp do
                  historycznych danych tego użytkownika. Znalezione informacje
                  obejmują historię banów z najpopularniejszych sieci serwerów,
                  kluczowe informacje o koncie oraz dane związane z grami.
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
