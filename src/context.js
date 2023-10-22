import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const URL = "http://localhost:3001/api/player?steamid=";
// 76561197960435530
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchId, setSearchId] = useState("76561197960435530");
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchPlayer = useCallback(async () => {
    setLoading(true);
    try {
      console.log("searchID " + searchId);
      const response = await fetch(`${URL}${searchId}`);
      const data = await response.json();
      const player = data.response.players[0];
      console.log(player);

      setPlayers(player);
      if (player)
        setResultTitle("The player you are looking for has bans");
      else setResultTitle("Player not found");
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
        players,
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
