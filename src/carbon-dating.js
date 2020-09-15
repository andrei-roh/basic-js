const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
   let number = 0;
  let RATE_REACTION = 0.693/HALF_LIFE_PERIOD;
  if (typeof (sampleActivity) !== 'string' && sampleActivity > 0 && sampleActivity < MODERN_ACTIVITY){
  number = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / RATE_REACTION;
  number = Math.ceil(number);
  return number}
  else return false;
}
