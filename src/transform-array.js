const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === '--discard-prev') {arr.splice([i], 1)}
    else if (arr[0] === '--discard-next') {}
    else if (arr[0] === '--double-next') {}
    else if (arr[0] === '--double-prev') {arr.splice([i], 1)}
    else if (arr[i] === 'true') {arr.splice([i], 1)}
    else if (arr[i] === '--discard-next') {arr.splice([i], 2)}
    else if (arr[i] === '--discard-prev') {arr.splice([i - 1], 2)}
    else if (arr[i] === '--double-next') {arr.splice([i], 1, arr[i + 1])}
    else if (arr[i] === '--double-prev') {arr.splice([i], 1, arr[i - 1])}
    else if (arr[arr.length - 1] === '--double-next') {arr.splice([arr.length - 1], 1)}
    else if (arr[arr.length - 1] === '--discard-prev') {arr.splice([arr.length - 1], 1)}
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-prev') {arr.splice([i], 1)}
    else if (arr[i] === '--double-prev') {arr.splice([i], 1)}
    else if (arr[i] === '--double-next') {arr.splice([i], 1)}
    else if (arr[i] === '--discard-next') {arr.splice([i], 1)}
  }
  return arr
};
