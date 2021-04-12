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
  const strArr = str.split('');
  let count = 1;
  const newArr = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== strArr[i + 1]) {
      if (count === 1) {
        newArr.push(strArr[i]);
      } else {
        newArr.push(count + strArr[i]);
      }
      count = 1;
    } else {
      count++;
    }
  }
  return newArr.join('');
}

module.exports = encodeLine;
