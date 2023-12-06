// import { writeFile } from "node:fs";
const fs = require("fs");
// console.log(fs);

// Example of Asynchronous - runs even the prior not-done processign.
// fs.mkdir("emptyFolder", { recursive: true }, (err) => {
//   console.log("Inside MKDIR!!");
//   if (err) throw err;
// });
// console.log("after and outside MKDIR!");

// Example of Asynchronous - runs even the prior not-done processign.
// Use-case: lets say i want to create folder & add a file after it.
// fs.mkdirSync("emptyFolder");
// console.log("after and outside MKDIR!");

// Exercise:===================================================================
let folderName = process.argv[2] || "Project"; // w/ Default if undefined // Replace with your desired destination folder

// Specify the path to the existing 'standard.html' file
const htmlSourceFilePath = `C://Users/cjarn/Desktop/Web Dev Course/-Done part of course/Section 26 - Project Point Keeper/Update_Project - Basketball Pointkeeper/basketballScorekeeper/index.html`;
const cssSourceFilePath = `C://Users/cjarn/Desktop/Web Dev Course/-Done part of course/Section 26 - Project Point Keeper/Update_Project - Basketball Pointkeeper/basketballScorekeeper/app.css`;
const javascriptSourceFilePath = `C://Users/cjarn/Desktop/Web Dev Course/-Done part of course/Section 26 - Project Point Keeper/Update_Project - Basketball Pointkeeper/basketballScorekeeper/app.js`;

// Read the content of 'standard.html'
const htmlData = fs.readFileSync(htmlSourceFilePath, "utf8");
const cssData = fs.readFileSync(cssSourceFilePath, "utf8");
const javascriptData = fs.readFileSync(javascriptSourceFilePath, "utf8");

// Specify the folder and file name where you want to write the content
const htmlDestinationFilePath = `${"folderName"}/index.html`;
const cssDestinationFilePath = `${"folderName"}/app.css`;
const javascriptDestinationFilePath = `${"folderName"}/app.js`;

try {
  //   fs.mkdirSync("folderName");
  // Write the content to the new files
  fs.writeFileSync(htmlDestinationFilePath, htmlData);
  fs.writeFileSync(cssDestinationFilePath, cssData);
  fs.writeFileSync(javascriptDestinationFilePath, javascriptData);
  console.log("File has been written successfully.");
} catch (error) {
  console.log(error);
}

// Error Meet: Learn-----------------------
// fs.writeFile("ass2.txt", "", (err) => {});
// fs.writeFileSync("ass3.txt", "dsadasdsad");
// End of Error Met Learn------------------
