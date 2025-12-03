// Map, Set, WeakMap, WeakSet

// Set
// It contains only unique values

let array = [1, 2, 3, 4];

let set = new Set(array);
console.log(set);
console.log(typeof set);

set.add(5);
set.add(5);
console.log(set);

set.delete(3);
console.log(set);

let newObj = { name: "sayyDev" };
set.add(newObj);
console.log(set);

console.log(set.has(8));
console.log(set);
