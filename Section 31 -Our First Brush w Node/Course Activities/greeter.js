// Note: 1st elements - executable-path, 2nd element current Directory
const args = process.argv.slice(2);
for (let arg of args) {
  console.log(`Hello there, ${arg}`);
}
