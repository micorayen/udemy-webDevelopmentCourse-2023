const franc = require("franc");
const colors = require("colors");
const langs = require("langs");

console.dir(langs);

// Step 1: Take argv
// let input = process.argv[2];
// // Step 2: Pass it to 'Franc'
// let languageCode = franc(input);

// Step 3: Get the language-code (3 letter)
// if (languageCode === "und") {
//   console.log("Information: Couldn,t find a match/language");
// } else {
//   // Step 4: After determined not undifine, Pass on 'nodeJS-langs'
//   const determineLanguage = langs.where("3", languageCode);

//   if (determineLanguage) {
//     console.log(`Language must be: ${determineLanguage.name}`);
//     console.log(`Language-code: ${languageCode}`);
//   } else {
//     console.log(
//       colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${languageCode}`)
//     );
//   }
// }
