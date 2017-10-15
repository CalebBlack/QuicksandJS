# Quicksand.JS
Quicksand is a state/data management solution. It is based upon creating listeners for data change events.

## Paths
Paths are where your data is stored. It represents the path of objects in the internal data object, and is formatted like this 'first.second.third'.

## Methods

#### set
The set method sets the value at the specified path with any value.
```qs.onChange(path,value)```

#### get
The get method allows you to get the value at the specified path.
```qs.get(path)```

#### onChange
The onChange method allows you to add a function to be called when the data at a given path is changed. The new value and the old value and the path are passed to the function.
```qs.onChange(path,function)```

#### didChange
The didChange method allows you to set the function to determine whether the onChange functions should be called (the function should return a boolean value). Unlike the onChange method, there can only be one didChange per path, so calling this multiple times on the same path will just override your previous functions.
```qs.didChange(path,function)```


## Example
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
