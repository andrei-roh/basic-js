const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
    }
    else if (!date.getTime()) {
      return new Error
      };
  let whatSeason = new Date(date).toString().split(' ')
  if (whatSeason[1] == 'Dec' || whatSeason[1] == 'Jan' || whatSeason[1] == 'Feb') {
    return 'winter'
  }
    else if (whatSeason[1] == 'Mar' || whatSeason[1] == 'Apr' || whatSeason[1] == 'May') {
      return 'spring'
    }
    else if (whatSeason[1] == 'Jun' || whatSeason[1] == 'Jul' || whatSeason[1] == 'Aug') {
      return 'summer'
    }
    else if (whatSeason[1] == 'Sep' || whatSeason[1] == 'Oct' || whatSeason[1] == 'Nov') {
      return 'autumn'
    }
};
