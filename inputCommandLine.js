// console.log(process.argv[4]);

// From TERMINAL

// node processArgv.js hi
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Nodejs\\node_tutorial\\processArgv.js',
//   'hi'
// ]

// node processArgv.js hi hello namaste
// namaste

const fs = require("fs");

const input = process.argv;
if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid input");
}
// fs.writeFileSync(input[2], input[3]);

//from GEEKS
// let data =
//   "This is a file containing a collection" +
//   " of programming languages.\n" +
//   "1. C\n2. C++\n3. Python";

// fs.writeFileSync("programming.txt", data);
// console.log("File written successfully\n");
// console.log("The written has the following contents:");
// console.log(fs.readFileSync("programming.txt", "utf8"));
