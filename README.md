# Quicksand.JS
Quicksand is a lightweight javascript state/data management solution. Instead of being based on actions like redux, instead it focuses on setting the new state directly, and listening to changes with callback functions in order to reflect the new data across your application effectively. This gives several advantages when used with React, including supporting better two way data binding and unnecessary re-renderering by not pushing the data into the component props.

## Initializing
You must create a new Quicksand instance in order to use it.

```
const Quicksand = require('quicksandjs');
var qs = new Quicksand();
```

## Paths
Paths are where your data is stored. It represents the path of objects in the internal data object, and is formatted by joining each part of the parts with periods.

```first.second.third```

## Methods

#### set
The set method sets the value at the specified path with any value.

```qs.set(path,value)```

#### get
The get method allows you to get the value at the specified path.

```qs.get(path)```

#### onChange
The onChange method allows you to add a function to be called when the data at a given path is changed. The new value and the old value and the path are passed to the function.

```qs.onChange(path,function)```

#### didChange
The didChange method allows you to set the function to determine whether the onChange functions should be called (the function should return a boolean value). Unlike the onChange method, there can only be one didChange method per path, so calling this multiple times on the same path will just override your previous functions.

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
state.set(path,'secondvalue')
```
