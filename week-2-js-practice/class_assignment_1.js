const fs = require("fs");

function clean(filename) {
  const fileContent = fs.readFileSync(filename, "utf-8");
  const cleanContent = fileContent.replace(/\s+/g, "");
  fs.writeFileSync(filename, cleanContent);
  console.log("File is cleaned.");
}

clean("sample.txt");
