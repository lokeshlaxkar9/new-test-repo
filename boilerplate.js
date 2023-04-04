// Node.js program to demonstrate the
// fs.mkdir() Method

// Include fs and path module
const fs = require("fs");
// const path = require("path");

const folderName = process.argv[2] || "Project";

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, String(folderName));
  fs.writeFileSync(`${folderName}/styles.css`, String(folderName));
  fs.writeFileSync(`${folderName}/app.js`, String(folderName));
} catch (e) {
  console.log("OOPS SOMETHING WENT WRONG!!");
  console.log(e);
}
