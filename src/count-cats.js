const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard){
  let number = 0;
  for (i = 0; i < backyard.length; i++){
    if (backyard[i] === '^^')
    {number += 1}
  }
  return number
}
