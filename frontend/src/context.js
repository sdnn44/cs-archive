import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { steamIDtoSteam64 } from "./utils/steamid-conventer";

const BASE_URL = "https://cs-archive-server.vercel.app/api/";
const ENDPOINTS = {
  player: "player",
  steamBans: "steambans",
  playerLevel: "player_level",
  playerGames: "player_games",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const { steamID: urlSearchId } = useParams(); // Get searchId from URL params
  console.log(urlSearchId);
  const storedSearchId = urlSearchId || "STEAM_0:0:84901";
  const [searchId, setSearchId] = useState(storedSearchId);
  console.log("searchid context= " + searchId);
  const [player, setPlayer] = useState([]);
  const [playerSteamBans, setPlayerSteamBans] = useState([]);
  const [playerGames, setPlayerGames] = useState([]);
  const [steamLevel, setSteamLevel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchData = useCallback(async (endpoint, steam64) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}${endpoint}?steamid=${steam64}`);
      const data = await response.json();
      switch (endpoint) {
        case ENDPOINTS.player:
          const searchedPlayer = data.response.players[0];
          setPlayer(searchedPlayer);
          // if (searchedPlayer) setResultTitle("The player you are looking for has been found");
          // else setResultTitle("Player not found");
          break;
        case ENDPOINTS.steamBans:
          const getPlayerBans = data.players[0];
          setPlayerSteamBans(getPlayerBans);
          break;
        case ENDPOINTS.playerLevel:
          const getSteamLevel = data.response;
          setSteamLevel(getSteamLevel);
          break;
        case ENDPOINTS.playerGames:
          const getPlayerGames = data.response;
          setPlayerGames(getPlayerGames);
          break;
        default:
          break;
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const fetchPlayer = useCallback(() => {
    const steam64 = steamIDtoSteam64(searchId);

    Object.values(ENDPOINTS).forEach((endpoint) =>
      fetchData(endpoint, steam64)
    );
  }, [searchId, fetchData]);

  useEffect(() => {
    fetchPlayer();
  }, [searchId, fetchPlayer]);

  useEffect(() => {
    if (urlSearchId) {
      setSearchId(urlSearchId);
    }
    fetchPlayer();
  }, [searchId, fetchPlayer, urlSearchId]);

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
