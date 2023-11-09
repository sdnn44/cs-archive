var bigInt = require("big-integer");
/* global BigInt */
export function steamIDtoSteam64(steamID) {
  
  const parts = steamID.replace("STEAM_", "").split(":");
  console.log(parts[1]);
  console.log(parts[2]);

  const communityID = BigInt(76561197960265728n);
  console.log(`communityID = ` + communityID);
  const communityID2 = communityID + BigInt(parts[1]);
  console.log(`communityID2 czyli ` + BigInt(communityID2) + ` = ` + communityID + ` + ` + parts[1]);
  const communityID3 = communityID2 + BigInt(parts[2] * 2);
  console.log(communityID3)

  console.log(communityID3.toString())
  
  return communityID3.toString();
}
