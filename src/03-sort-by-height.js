/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  arr.filter((a, index) => {
    if (a === -1) {
      newArr.push(index);
    }
    return newArr;
  });
  const arrPlus = arr.filter((e) => e !== -1).sort((a, b) => a - b);
  for (let i = 0; i < newArr.length; i++) {
    arrPlus.splice(newArr[i], 0, -1);
  }
  return arrPlus;
}

module.exports = sortByHeight;
