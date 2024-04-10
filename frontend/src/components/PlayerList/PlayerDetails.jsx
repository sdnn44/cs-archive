import React from "react";
import PlayerStatus from "./PlayerInformation/PlayerStatus";
import BanList from "./PlayerInformation/WebsiteBans/BanList";
import { useGlobalContext } from "../../context";
import "./PlayerDetails.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const PlayerDetails = () => {
  const { loading } = useGlobalContext();
  return (
    <div className="player-details-container">
      {/* {!loading ? (
        <Loading />
      ) : (
        <>
          <BanList />
          <PlayerStatus />
        </>
      )} */}
      <div className="page-back-container">
        <a href="https://cs-archive.vercel.app/" className="page-back">
          <ArrowBackIcon sx={{ fontSize: "3rem" }} className="arrow-back" />
        </a>
        <span>Ostatnia aktualizacja bazy danych z banami graczy nastąpiła 11 kwietnia br. o godzinie 11:00.</span>
      </div>
      <BanList />
      <PlayerStatus />
    </div>
  );
};
