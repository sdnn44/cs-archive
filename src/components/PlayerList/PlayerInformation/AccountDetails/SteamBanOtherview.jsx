import React from "react";
import { useGlobalContext } from "../../../../context";
import GavelIcon from "@mui/icons-material/Gavel";
import "./SteamBanOtherview.css";

const BanInfo = ({ title, status, iconColor }) => (
  <p>
    <span className="ban-otherview-span">{title}:</span>{" "}
    <span style={{ color: status !== false ? "red" : "green" }}>
      {status === false ? ` brak banów` : ` nałożone bany`}
    </span>
    <GavelIcon color={iconColor} />
  </p>
);

export const SteamBanOtherview = () => {
  const { playerSteamBans } = useGlobalContext();

  return (
    <div className="ban-otherview">
      <BanInfo
        title="VAC"
        status={playerSteamBans?.VACBanned}
        iconColor={playerSteamBans?.VACBanned !== false ? "error" : "success"}
      />
      <BanInfo
        title="Community bans"
        status={playerSteamBans?.CommunityBanned}
        iconColor={
          playerSteamBans?.CommunityBanned !== false ? "error" : "success"
        }
      />
      <BanInfo
        title="Game bans"
        status={playerSteamBans?.NumberOfGameBans > 0}
        iconColor={playerSteamBans?.NumberOfGameBans > 0 ? "error" : "success"}
      />
      <BanInfo
        title="Trade bans"
        status={playerSteamBans?.EconomyBan !== "none"}
        iconColor={playerSteamBans?.EconomyBan !== "none" ? "error" : "success"}
      />
    </div>
  );
};
