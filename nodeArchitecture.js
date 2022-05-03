console.log("starting up");

setTimeout(() => {
  console.log("2 seconds log");
}, 2000);

setTimeout(() => {
  console.log("0 seconds log");
}, 0);

console.log("finishin up");

// call stack > nodeApi > callback Queue
