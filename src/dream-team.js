module.exports = function createDreamTeam(members) {
  if( !Array.isArray(members) || members.length === 0 ){ return  false}
  const regexp = /[a-zA-Z]/g;
  let arr = [];
  for(let i = 0; i < members.length;i++){
    if(typeof members[i] !== "string" ){continue}
     if(typeof members[i] === "string" ){members[i] = members[i][members[i].search(regexp)];
     arr.push(members[i])}

  }

  return arr.join('').toLowerCase().split('').sort().join('').toUpperCase();

};