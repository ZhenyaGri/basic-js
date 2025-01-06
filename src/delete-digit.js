const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  arr = String(n).split('');
  max = 0;
  index = -1;
  for (let i = 0; i < arr.length; i++) {
    let num  = arr[i];
    arr[i] = '';
    if ( +arr.join('') > max) {
      max = +arr.join('');
    }
    arr[i] = num;
  };
  return max;
}

module.exports = {
  deleteDigit
};
