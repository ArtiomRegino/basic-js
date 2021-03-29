module.exports = function createDreamTeam(members) {
  let secret = '';

  if(!Array.isArray(members) || members.length == 0) {
    return false;
  }

  members.forEach(member => {
    if(typeof(member) == 'string' && member.length > 0) {
      return secret += member.trimStart()[0].toUpperCase();
    } 
  });

  return secret.split('').sort().join("");
};
