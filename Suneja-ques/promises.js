// Async JS programming
// Callback, Promise, async/await

const datas = [
  { name: "Haarish.rs", profession: "Software Engineer" },
  { name: "sayyDev", profession: "Junior Software Developer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData, callbackFnc) {
  setTimeout(() => {
    datas.push(newData);
    callbackFnc();
  }, 2000);
}

// getDatas();
// createData({ name: "shyDev", profession: "Senior Software Developer" });

// Problem: Here the problem is occur when we call getDatas() it shows the datas on screen which are two datas at a same time we also call createData() by passing new value of data this value not show on screen why??? bcz getDatas() time out is 1sec so it shows the previous data and createData() time out is 2sec so it update the data array after 2sec so it will not show it.

// Here is the solution: By using Callback function
// Callback function

// createData(
//   { name: "shyDev", profession: "Senior Software Developer" },
//   getDatas
// );

function createData1(newdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong in promises");
      }
    }, 2000);
  });
}

// createData1({ name: "shyDev", profession: "Senior Software Developer" })
//   .then(getDatas)
//   .catch((err) => console.log(err));

// Async and Await

async function start() {
  await createData1({
    name: "shyDev",
    profession: "Senior Software Developer",
  });
  getDatas();
}

start();
