const alphabet = 'abcdefghijklmnopqrstuvqxyz';
const numbers = '0123456789';
const validPathChars = alphabet + alphabet.toUpperCase() + numbers + '.';
function getParts(path){
  if (typeof path === 'number') {
    path = path.toString();
  }
  if (typeof path !== 'string' || path.length <= 0 || path.startsWith('.') || path.endsWith('.') || path.includes('..') ){
    return null;
  }
  for (var i = 0; i < path.length; i++) {
    if (!validPathChars.includes(path[i])){
      return null;
    }
  }
  return path.split('.');
}
module.exports = getParts;
