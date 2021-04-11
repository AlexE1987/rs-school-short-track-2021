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
  const minNum = String(n).split('').sort()[0];
  const filtNum = String(n).split('');
  const idx = filtNum.indexOf(minNum);
  delete filtNum[idx];
  const res = filtNum.join('');
  return +res;
}

module.exports = deleteDigit;
