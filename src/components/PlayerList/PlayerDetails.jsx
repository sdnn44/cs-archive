import React from "react";
import PlayerStatus from "./PlayerInformation/PlayerStatus";
import BanList from "./PlayerInformation/WebsiteBans/BanList";
import { useGlobalContext } from "../../context";
import './PlayerDetails.css'

export const PlayerDetails = () => {
  const { loading } = useGlobalContext();
  return (
    <div className="wrapper">
      {/* {!loading ? (
        <Loading />
      ) : (
        <>
          <BanList />
          <PlayerStatus />
        </>
      )} */}
      <BanList />
      <PlayerStatus />
    </div>
  );
};
