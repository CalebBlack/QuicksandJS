const getParts = require('./getparts');
function find(obj, path) {
  let parts = getParts(path);
  if (!parts) {
    throw new Error('invalid path');
  }
  var current = obj;
  for (var i = 0; i < parts.length; i++) {
    if (current.hasOwnProperty(parts[i])) {
      current = current[parts[i]];
    } else {
      return null;
    }
  }
  return current;
}
module.exports = find;
