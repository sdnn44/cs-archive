import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { steamIDtoSteam64 } from "./utils/steamid-conventer";

const URL = "http://localhost:3001/api/player?steamid=";
const URL_level = "http://localhost:3001/api/player_level?steamid=";
const URL_steamBans = "http://localhost:3001/api/steambans?steamid=";
const URL_playerGames = "http://localhost:3001/api/player_games?steamid=";
// 76561197960435530
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchId, setSearchId] = useState("STEAM_0:0:84901");
  const [player, setPlayer] = useState([]);
  const [playerSteamBans, setPlayerSteamBans] = useState([]);
  const [playerGames, setPlayerGames] = useState([]);
  const [steamLevel, setSteamLevel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchPlayer = useCallback(async () => {
    setLoading(true);
    const steam64 = steamIDtoSteam64(searchId);

    try {
      console.log("searchID " + searchId);
      const response = await fetch(`${URL}${steam64}`);
      const data = await response.json();
      console.log(data);
      const searchedPlayer = data.response.players[0];
      console.log(searchedPlayer);

      setPlayer(searchedPlayer);
      if (searchedPlayer)
        setResultTitle("The player you are looking has been found");
      else setResultTitle("Player not found");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    try {
      setLoading(true);
      const response = await fetch(`${URL_steamBans}${steam64}`);
      const data = await response.json();
      console.log(data);
      const getPlayerBans = data.players[0];
      setPlayerSteamBans(getPlayerBans);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    try {
      setLoading(true);
      const response = await fetch(`${URL_level}${steam64}`);
      const data = await response.json();
      const getSteamLevel = data.response;
      console.log(getSteamLevel);
      setSteamLevel(getSteamLevel);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    try {
      setLoading(true);
      const response = await fetch(`${URL_playerGames}${steam64}`);
      const data = await response.json();
      const getPlayerGames = data.response;
      console.log(getPlayerGames);
      setPlayerGames(getPlayerGames);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchId]);

  useEffect(() => {
    fetchPlayer();
  }, [searchId, fetchPlayer]);

  return (
    <AppContext.Provider
      value={{
        loading,
        searchId,
        player,
        playerSteamBans,
        playerGames,
        steamLevel,
        setSearchId,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
