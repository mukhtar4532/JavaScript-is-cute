// Higher Order Function

//forEach
//filter
//map
//sort
//reduce

// what is polyfill, bible, transpilar -----> interview question

const companies = [
  { name: "Google", category: "Product Based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
  { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
  { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
  { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//                  forEach

// companies.forEach(function (company) {
//   console.log(company);
// });

// companies.forEach((company, index) => console.log(company.name));

//                  filter

// companies.filter(function (company) {
//   if (company.category === "Product Based") {
//     console.log(company.name);
//   }
//   // console.log(ages);
// });

// const age = ages.filter(function (age) {
//   if (age > 25) {
//     // console.log(age);
//     return age;
//   }
// });

// console.log(age);

// const newAge = ages.filter((age) => age > 35);
// console.log(newAge);

//                  sort

// const sorted = companies.sort(function (c1, c2) {
//   if (c1.name > c2.name) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

//             write this is function one liner

const sorted = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));

// console.log(sorted);

const sortedAges = ages.sort((a, b) => b - a);

console.log(sortedAges);

const sortedAges1 = ages.reduce((total, age) => (total += age), 0);

console.log(sortedAges1);
