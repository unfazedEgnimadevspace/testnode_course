const { readFileSync, writeFileSync } = require("fs");
console.log("Start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

const thirdFile = writeFileSync(
  "./content/thirdFile.txt",
  `Here is the ${first} and ${second} text file`,
  { flag: "a" }
);

console.log("done with the task");
console.log("starting the next one ");
