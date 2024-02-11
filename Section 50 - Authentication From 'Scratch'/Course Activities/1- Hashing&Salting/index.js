const bcrypt = require("bcryptjs");

// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(12); // 10 rounds
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(`Salt: ${salt}`);
//   console.log(`Hash: ${hash}`);
// };
// hashPassword("password");

// Note: more direct, approach
const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(`Hash: ${hash}`);
};
// hashPassword("password1");

const login = async (pw, hashedPassword) => {
  const result = await bcrypt.compare(pw, hashedPassword);
  if (result) {
    console.log("Logged In successfully!");
  } else {
    console.log("Incorrect Password");
  }
};

login(
  "password1",
  "$2a$12$RHlEYZugYY4Ck./1ADbgBuvM4JQ050sXH2YHVUZxjYupLJFexIlXe"
);
