export function unixTimestampToDateTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are 0-indexed
    const day = date.getDate();

    return `${day}/${month}/${year}`;
  }
  
export function calculateTimeElapsed(unixTimestamp) {
    const currentDate = new Date();
    const givenDate = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds
  
    const elapsedMilliseconds = currentDate - givenDate;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const elapsedDays = Math.floor(elapsedHours / 24);
    const elapsedMonths = Math.floor(elapsedDays / 30); // Approximate, assuming a month is 30 days
    const elapsedYears = Math.floor(elapsedMonths / 12);
  
    if (elapsedYears > 0) {
      return `${elapsedYears} ${elapsedYears > 1 ? 'lat' : 'roku'}`;
    } else if (elapsedMonths > 0) {
      return `${elapsedMonths} ${elapsedMonths > 1 ? 'miesięcy' : 'miesiąca'}`;
    } else {
      return `${elapsedDays} ${elapsedDays > 1 ? 'dni' : 'dnia'}`;
    }
  }