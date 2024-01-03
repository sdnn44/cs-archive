/* global BigInt */
export function steamIDtoSteam64(steamID) {
  const parts = steamID.replace("STEAM_", "").split(":");

  const steamOffset = BigInt(76561197960265728n);
  const steam64 = steamOffset + BigInt(parts[1]) + BigInt(parts[2] * 2);

  return steam64.toString();
}


// status activity
// account src + style 
// vac time
// games activity
