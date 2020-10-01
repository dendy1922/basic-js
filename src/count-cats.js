module.exports = function countCats(matrix) {
  let arr = Array.prototype.concat(...matrix);
  let counter = 0;
  for (let item of arr) {
    if (item === '^^') {
      counter++;
    }
  }
  return counter
};
