const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = [];
  if (!Array.isArray(members)){
    return false
  }
  else {
    for (i = 0; i < members.length; i++) {
      if (/[0-9]/.test(members[i]) || typeof(members[i]) !== 'string') {
        members.splice(i, 1)
      }
      if (/[0-9]/.test(members[i]) || typeof(members[i]) !== 'string') {
        members.splice(i, 1)
      }
      if (/[0-9]/.test(members[i]) || typeof(members[i]) !== 'string') {
        members.splice(i, 1)
      }
      if (/[0-9]/.test(members[i]) || typeof(members[i]) !== 'string') {
        members.splice(i, 1)
      }
      if (/[0-9]/.test(members[i]) || typeof(members[i]) !== 'string') {
        members.splice(i, 1)
      }
      if(typeof(members[i]) == 'string'){
        members[i] = members[i].trim().toUpperCase()
      }
    }
    members = members.sort().flat();
  for (i = 0; i < members.length; i++) {
      if (/[0-9]/.test(members[i])) {
      members.splice(i, 1)
      }
      teamName += members[i].charAt(0)   
   }
   return teamName;
   }
  }
};
