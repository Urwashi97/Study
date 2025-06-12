/**
 You are given an integer finalSum. Split it into a sum of a maximum number of unique positive even integers.
 */
var maximumEvenSplit = function (finalSum) {
  let evennum = [];
  let first = 2;
  if (finalSum % 2 == 0) {
    while (finalSum >= first) {
      evennum.push(first);
      finalSum -= first;
      first += 2;
    }
    if (finalSum > 0) {
      let last = evennum.pop();
      evennum.push(last + finalSum);
    }
    return evennum.every((num) => num % 2 === 0) ? evennum : [];
  } else return [];
};

console.log(maximumEvenSplit(12)); //[2,4,6]
console.log(maximumEvenSplit(7)); //[]
console.log(maximumEvenSplit(28)); //[2,4,6,16]

const app = require("express");
const jwt = "../../middleware/jwtmiddleware";
app.use();
app.listen("4200", () => {
  console.log("App is listening to 4200");
});

app.post("/createUser", jwt.validateUser(), async (req, res, next) => {
  const { name } = req.body;
  const user = await db.user.create(req.body);
  res.status(200).send({ message: `User is created` });
});

db.user.find({ name: "test" }).skip(2).limit(10);
