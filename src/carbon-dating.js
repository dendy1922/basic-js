const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity === 'string' || sampleActivity instanceof String) {
    try {
      let activ = parseFloat(sampleActivity);
      if (!(Number(activ) === activ && activ % 1 !== 0)) return false;
      if (!(0 < activ < 15)) return false;

      let log = Math.log(MODERN_ACTIVITY / activ);
      let k = 0.693 / HALF_LIFE_PERIOD;
      let result = Math.ceil(log / k);

      return result > 0 ? result : false;
    }
    catch (error) {
      return false;
    }
  }

  else {
    return false
  }
};

