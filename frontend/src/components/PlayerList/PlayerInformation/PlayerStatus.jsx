import React from "react";
import "./PlayerStatus.css";
import { AccountDetails } from "./AccountDetails/AccountDetails";
import { GameDetails } from "./GameDetails/GameDetails";
import { useGlobalContext } from "../../../context";
import { Loading } from "../../Loader/Loader";

const PlayerStatus = () => {

  const { loading } = useGlobalContext();

  return (
    <div className="player-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <AccountDetails />
          <GameDetails />
        </>
      )}
      
    </div>
  );
};

export default PlayerStatus;
