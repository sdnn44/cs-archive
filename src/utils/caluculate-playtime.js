export function calculateRoundedPlaytime(playtime) {
    return (Math.round((playtime / 60) * 100) / 100).toFixed(1);
  }