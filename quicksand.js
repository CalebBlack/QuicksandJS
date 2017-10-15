const getParts = require('./getparts');
const find = require('./find');
const put = require('./put');

class Quicksand {
  constructor(initialData = {}){
    if (typeof initialData != 'object') {
      throw new Error('invalid initial data');
    }
    this.data = initialData;
    this.changeListeners = {};
    this.changeChecks = {};
    this.onChange = this.onChange.bind(this);
    this.didChange = this.didChange.bind(this);
    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
  }
  onChange(path,functionIn){
    var valid = getParts(path);
    if (!valid) {
      throw new Error('invalid path');
    }
    if (typeof functionIn !== 'function') {
      throw new Error('invalid function');
    }
    if (!this.changeListeners.hasOwnProperty(path)){
      this.changeListeners[path] = [];
    }
    this.changeListeners[path].push(functionIn);
  }
  didChange(path,functionIn){
    var valid = getParts(path);
    if (!valid) {
      throw new Error('invalid path');
    }
    if (typeof functionIn !== 'function') {
      throw new Error('invalid function');
    }
    this.changeChecks[path] = functionIn;
  }
  set(path,newValue){
    let oldValue = find(this.data,path);
    if ((!this.changeChecks.hasOwnProperty(path) || this.changeChecks[path](newValue,oldValue,path) === true) && this.changeListeners.hasOwnProperty(path) && this.changeListeners[path].length > 0){
      this.changeListeners[path].forEach(listener=>{
        listener(newValue,oldValue);
      });
    }
    put(this.data,path,newValue);
  }
  get(path){
    return find(this.data,path);
  }
}

module.exports = Quicksand;
