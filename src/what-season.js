module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  }
  catch {
    throw new Error('Not implemented');
  }
  let season = date.getMonth();
  return ([0, 1, 11].includes(season)) ? "winter" :
    ([2, 3, 4].includes(season)) ? "spring" :
      ([5, 6, 7].includes(season)) ? "summer" : "autumn"
};


