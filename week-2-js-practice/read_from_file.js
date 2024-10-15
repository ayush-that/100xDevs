const fs = require("fs");

const a = fs.readFileSync("a.txt", "utf-8"); // or Bytes, Hex
console.log(a);
