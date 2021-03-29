module.exports = function countCats(matrix) {
  if(!matrix || matrix.length == 0) {
    return 0;
  }

  return matrix.flat().reduce((acc, cur) => cur === '^^' ? ++acc : acc, 0);
};