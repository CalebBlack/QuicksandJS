## Quicksand.JS
Quicksand is a state/data management solution. It is based upon creating listeners for data change events.

Example:
```
const Quicksand = require('quicksandjs');
let state = new Quicksand();
let path = 'a.b.c';
state.onChange(path,(newValue,oldValue)=>{
  console.log(newValue,oldValue);
})
state.didChange(path,(newValue,oldValue)=>{return typeof newValue != typeof oldValue});
state.set(path,'firstvalue');
state.set(path,'secondvalue')```
