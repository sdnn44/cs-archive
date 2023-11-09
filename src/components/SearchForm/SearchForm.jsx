import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchId, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchId = searchText.current.value.trim();
    // if()
    console.log(tempSearchId);
    setSearchId(searchText.current.value) // 40:26
    navigate(`/sprawdz/${tempSearchId}`)
    //to do:
    //parse steamid - steam64

  }

  return (
    <div className="search-form">
      <div className="search-container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem">
              <input
                type="text"
                className="form-control"
                placeholder="STEAM_0:1:3269899"
                ref={searchText}
              />
              <button type="submit" className="btn" onClick={handleSubmit}>
                Sprawdź
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
