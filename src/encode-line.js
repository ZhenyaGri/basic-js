const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  arr = str.match(/(.)\1*/g);
  newStr = '';
  if (str === ''){
    return str;
  }
  arr.forEach((elem) => {
    if (elem.length > 1) {
      newStr += elem.length + elem[0];
    } else {
      newStr += elem;
    }
  })
  return newStr;
}

module.exports = {
  encodeLine
};
