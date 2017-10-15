const getParts = require('./getparts');
function put(obj, path,value) {
  let parts = getParts(path);
  if (!parts) {
    throw new Error('invalid path');
  }
  var current = obj;
  for (var i = 0; i < parts.length-1; i++) {
    if (!current.hasOwnProperty(parts[i])) {
      current[parts[i]] = {};
    } else if (typeof current[parts[i]] !== 'object') {
      return false;
    }
    current = current[parts[i]];
  }
  if (current && typeof current === 'object') {
    current[path[path.length-1]] = value;
    return true;
  } else {
    return false;
  }
}
module.exports = put;
