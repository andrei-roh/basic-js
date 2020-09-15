const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix){
	  let arr = matrix.flat()
	  let number = 0;
	  for (i = 0; i < arr.length; i++){
	    if (arr[i] === '^^') {
        {number += 1}
      }
    }
    return number;
}
