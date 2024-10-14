/**
Sample input: [{ email: "user@example.com" }, { email: "admin@domain.com" }]
Expected output: [{ email: "user@example.com", username: "user", domain: "example.com" }, { email: "admin@domain.com", username: "admin", domain: "domain.com" }]
 */

contactDetail = (arr) => {
  const userDetails = [];
  arr.forEach((ele) => {
    const { email } = ele;
    const data = email.split("@");
    userDetails.push({
      email,
      username: data[0],
      domain: data[1],
    });
  });
  console.log(userDetails);
  return userDetails;
};
contactDetail([{ email: "user@example.com" }, { email: "admin@domain.com" }]);
