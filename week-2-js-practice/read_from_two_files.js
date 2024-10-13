const fs = require("fs");

const firstFile = fs.readFileSync("a.txt", "utf-8");
const SecondFile = fs.readFileSync("b.txt", "utf-8");

console.log(firstFile);
console.log(SecondFile);
