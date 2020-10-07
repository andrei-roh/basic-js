const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!(Array.isArray(arr))) {
    throw new Error;
  }
  else if(arr.length == 0) {
    return [];
  }
  let convertArray = [];
  let removePart = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      removePart.push(++i);
    } else if (arr[i] === "--discard-prev") {
      if (convertArray.length > 0 && removePart.indexOf(i - 1) === -1) {
        convertArray = convertArray.slice(0, convertArray.length - 1);
        removePart.push(i - 1);
      }
    } else if (arr[i] === "--double-next") {
      if (++i < arr.length) {
        convertArray.push(arr[i], arr[i]);
      }
    } else if (arr[i] === "--double-prev") {
      if (i > 0 && removePart.indexOf(i - 1) === -1) {
        convertArray.push(arr[i - 1]);
      }
    } else {
      convertArray.push(arr[i]);
    }
  }
  return convertArray;
};
