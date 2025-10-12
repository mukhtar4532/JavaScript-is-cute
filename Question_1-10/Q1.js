// objects can be define in many ways, some ways are -----------

// let user = {
//   name: "Duke",
//   profession: "Software Engineer",
//   city: "America",
// };

let user = {
  name: String,
  profession: String,
  city: String,
};

// 1

let obj1 = {
  name: "Mukhtar",
  age: 22,
  email: "mukhtar@gmail.com",
  gender: "male",
};

// console.log(obj1);

// 2 Constructor Function

// it create an object by calling object constructor

let obj2 = new Object();
obj2.name = "Harish";
obj2.age = 21;
obj2.email = "harish@gmail.com";

// console.log(obj2);

// 3 Using .create method

// it creates a prototype like a structure of something

let obj3 = Object.create(user);
// console.log(obj3);

obj3.name = "Alice";
// obj3.profession = "Artist";
obj3.profession = 24;
obj3.city = "London";

// console.log(obj3);
// console.log(obj3.profession);

// oooo this looks like something typescript, above the user prototype which like an interface we are use in typescript but it not strict like ts i'm use obj3.profession = 24, 24 is number but in user prototype i'm define string

// 4 Function constructor

function userObj(name, age) {
  this.name = name;
  this.age = age;
}

let obj4 = new userObj("Bruce Wayn", 23);

// console.log(obj4);

// object be created by calling fuction constructor and this keyword points to object variable/key

// 5 object using assign method

let obj5a = { name: "mukhtar" };
let obj5b = { age: 22 };

let obj5 = Object.assign({}, obj5a, obj5b);

// console.log(obj5);

// take two or more objects and copies their property in new one

// 6 Using JSON

let jsonString = '{"name":"Bruce wayn", "age":23}';
let obj6 = JSON.parse(jsonString);

console.log(obj6);

// it's used when we have to convert string or API response into object
