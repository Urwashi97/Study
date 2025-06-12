const crypto = require("crypto");

const hashPassword = (password) => {
  return crypto.createHash("sha256").update(password).digest("hex");
};

console.log(hashPassword("mypassword")); // Output: Fixed-length hash
console.log(hashPassword("mypassword123")); // Different hash
