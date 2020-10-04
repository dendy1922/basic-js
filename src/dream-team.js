module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let nameMembers = members.filter(function (item) {
    return (typeof item === 'string' || item instanceof String)
  });
  let names = nameMembers.map(function (name) {
    return name.toUpperCase().trim();
  });

  names.sort();
  let result = names.reduce(function (sum, current) {
    return sum + current[0];
  }, "");
  return result
};
