console.log("Learn call, apply and bind....");

//      call

// call():
// Used to immediately invoke a function with a specific this value and arguments passed individually.

const userDetails = {
  name: "sayyDev",
  age: 22,
  designation: "Frontend developer",
  // sum: function () {
  //   console.log(5 + 6);
  // },
  // printDetails: function () {
  //   // this.sum();
  //   console.log(this);
  // },
};

//                  we also access the generic function for the different objects by using call function

let printDetails = function (city, country) {
  userDetails["city"] = city;
  userDetails["country"] = country;
  //   console.log(arr);
  console.log(this.name + " " + city + " " + country);
  console.log(userDetails);
};

// userDetails.printDetails();
// printDetails.call(userDetails, "Delhi", "India");

const userDetails2 = {
  name: "Haarish.rs",
  age: 22,
  designation: "Full stack developer",
};

// userDetails.printDetails.call(userDetails2);
// printDetails.call(userDetails2, "Mumbai", "India");

//      Apply

// apply():
// Used to invoke a function with a specific this value, but arguments are passed as an array (or array-like structure).

//                  difference between the call and apply function is in passing the parameters, in call function we pass multiple variables individual while in apply we pass the multiple varible in a single/list array

// printDetails.apply(userDetails, ["Mumbai", "India"]);
// printDetails.apply(userDetails2, ["Delhi", "India"]);

//       Bind

// bind() does not call the function immediately.
// Instead, it returns a new function with this permanently set to the object you give.

// You can call that new function later.

//                  difference between the call and bind function is call function directly call the fuction while the bind function store the value of function call it when have to need or call at multiple places

//                  in bind function printdetails function call only one time and store the value of it in newfun now you can use newfun multiple time on single call

// printDetails.bind(userDetails, "Delhi", "India")
// const newfun = printDetails.bind(userDetails2, "Mumbai", "India");
// console.log(newfun);

// newfun();
