console.log("Hii");

// function sum(a) {
//   console.log(`Mukhtar you have ${a} stars.....`);
//   let c = 8;
//   return function (b) {
//     return a + b + c;
//   };
// }

// const closureStore = sum(3);
// console.log("Closure store value ", closureStore(7));

// Example 2

function sum1(a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    },
  };
}

let closureStore = sum1(5, 7, 9);
console.log(closureStore.getSumTwo());
console.log(closureStore.getSumThree());
