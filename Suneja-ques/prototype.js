const obj1 = {
  name: "sayyDev",
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
};

console.log(obj1);

const obj2 = {
  name: "haarish.rs",
  age: 22,
  __proto__: obj1,
};

console.log(obj2.getName() + " " + obj2.getAge());
// console.log("Prototype: ", obj2.__proto__);

const obj3 = {
  class: "MCA",
  __proto__: obj2,
};

console.log(obj3);
console.log(obj3.getName());

const object = new Object();
console.log(object);

const array1 = new Array();
console.log(array1);

//                  create custom prototype

Array.prototype.show = function () {
  return this;
};

const cities = ["Kanpur"];
console.log(cities.show());

//                  how to convert array into object using prototype

Array.prototype.convertIntoObj = function () {
  let newObj = {};
  cities.forEach((element) => {
    newObj[element] = element;
  });
  return newObj;
};

console.log(cities.convertIntoObj());

Array.prototype.convertIntoObj2 = function () {
  let newObj = {};
  cities.forEach((element, key) => {
    newObj[key] = element;
  });
  return newObj;
};

console.log(cities.convertIntoObj2());
