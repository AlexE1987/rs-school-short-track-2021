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
  const arrS1 = s1.split('');
  const arrS2 = s2.split('');
  let count = 0;

  arrS1.filter((e1) => {
    const index = arrS2.findIndex((e2) => e2 === e1);
    if (index >= 0) {
      count++;
      arrS2.splice(index, 1);
    }
    return count;
  });
  return count;
}

module.exports = getCommonCharacterCount;
