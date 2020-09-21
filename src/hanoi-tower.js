const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let solutionTurns = (2 ** disksNumber) - 1;
  turnsPerSecond = turnsSpeed / 3600;
  seconds = Math.floor(solutionTurns / turnsPerSecond);
   return {
        turns: solutionTurns,
        seconds: seconds
   };
 };
