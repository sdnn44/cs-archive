import React from "react";
import { useGlobalContext } from "../../../../../context";
import "./UserInformation.css";
import {
  calculateTimeElapsed,
  unixTimestampToDateTime,
} from "../../../../../utils/unix-timestamp-to-date";
import { useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export const UserInformation = (user) => {
  const { player } = useGlobalContext();
  const { steamID } = useParams();

  return (
    <div className="detailed-information">
      <p>
        <span>Steam ID:</span> {steamID}
      </p>
      <p>
        <span>Community ID:</span>{" "}
        {player?.steamid ? player.steamid : `brak informacji`}
      </p>
      <p>
        <span>Dane osobowe: </span>{" "}
        {player?.realname ? player.realname : `brak informacji`}
      </p>
      <p>
        <span>Konto utworzone:</span>{" "}
        {player?.timecreated
          ? unixTimestampToDateTime(player?.timecreated)
          : `brak informacji`}
      </p>
      <p>
        <span>Członek od:</span>{" "}
        {player?.timecreated
          ? calculateTimeElapsed(player?.timecreated)
          : `brak informacji`}
      </p>
      <p>
        <span>Konto Steam:</span>{" "}
        <IconButton
          href={player?.profileurl}
          aria-label="launch"
          target="_blank"
          sx={{ p: 0 }}
        >
          <ExitToAppIcon />
        </IconButton>
      </p>
    </div>
  );
};
