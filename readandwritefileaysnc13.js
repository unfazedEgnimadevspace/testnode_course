const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    return "oops ran into an error";
  } else {
    const first = result;
    readFile("./content/second.txt", "utf-8", (err, result) => {
      if (err) {
        console.log("Ooops Something went wrong");
        return;
      } else {
        const second = result;
        writeFile(
          "./content/thirdfileasync.txt",
          `Here is the result:${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log("done with the task");
            }
          }
        );
      }
    });
  }
});
console.log("starting the next one");
