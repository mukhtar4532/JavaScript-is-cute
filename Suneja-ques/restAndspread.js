console.log("hii");

// REST

// function addNum(a, b, c, ...others) {
//   console.log(others);
//   console.log(typeof others);
//   console.log(a + b + c + others);
//   console.log(typeof (a + b + c + others));
//   return a + b + c;
// }

// const res = addNum(2, 3, 4, 5, 6, 7);
// console.log(res);

// SPREAD

// const names = ["Mukhtar", "Haarish", "ShyDev", "sayyDev"];

// function getNames(names1, names2, names3, names4) {
//   console.log(names1, names2, names3, names4);
// }

// getNames(names[0], names[1], names[2], names[3]);
// getNames(...names);
// getNames(names);

//     REST AND SPREAD WITH OBJECT

// REST

var students = {
  name: "Mukhtar",
  age: "22",
  hobbies: ["cricket", "football"],
};

const { ...rest } = students;
console.log(rest);

// rest.hobbies.push("game: batminton");
// console.log("updated ", rest);

// SPREAD

const newStudents = {
  ...students,
  age: "25",
};

console.log(newStudents);
