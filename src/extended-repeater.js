const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strRepeater = str + '';
  if (options) {
    const {repeatTimes, addition, additionRepeatTimes} = options;
    let {separator, additionSeparator} = options;
    if (separator === undefined) {
      separator = '+';
    }
    if (!additionSeparator === undefined) {
      additionSeparator = '|';
    }
    function repeat(str, repeater, separator) {
      let strRepeater =  str;
      for (let i = 0; i < (repeater ? repeater - 1 : 0); i += 1 ) {
        strRepeater += separator + str;
      }
      return strRepeater;
    }
    if (addition !== undefined) {
      strRepeater += repeat(addition, additionRepeatTimes, additionSeparator);
    }
    return repeat(strRepeater, repeatTimes, separator);
  }
  return strRepeater;
};
