const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(ampleActivity) {
  if (typeof ampleActivity !== 'string' || isNaN(parseFloat(ampleActivity))) {
    return false;
  }
  const num = parseFloat(ampleActivity);
  if (num <= 0 || num >= MODERN_ACTIVITY) {
    return false;
  }
  const lnValue = Math.log(MODERN_ACTIVITY / num);
  const denominator = Math.log(2)/HALF_LIFE_PERIOD;
  return Math.ceil(lnValue/denominator);
}

module.exports = {
  dateSample
};
