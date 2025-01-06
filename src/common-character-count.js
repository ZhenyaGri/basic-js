const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  str1 = s1.split('');
  str2 = s2.split('');
  const arr1 = {};
  const arr2 = {};
  let sum = 0;
  str1.forEach(element => {
    if(arr1[element]) {
      arr1[element] += 1;
    } else {
      arr1[element] = 1;
    }
  });
  str2.forEach(element => {
    if(arr2[element]) {
      arr2[element] += 1;
    } else {
      arr2[element] = 1;
    }
  });
  const keys1 = Object.keys(arr1);
  keys1.forEach(element => {
    if(arr2[element]) {
      sum += (arr1[element] < arr2[element] ? arr1[element] : arr2[element]);
    }
  });
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
