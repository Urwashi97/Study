/**
Sample input: [{ name: "Shubham", marks: 85 }, { name: "Sakshi", marks: 90 }, { name: "Krutika", marks: 95 }]
Expected output: { name: "Krutika", marks: 95 }
 */
highestMarks = (arr) => {
  const data = [];
  let highestmarks = 0;
  arr.forEach((element) => {
    const { name, marks } = element;
    if (marks > highestmarks) {
      highestmarks = marks;
      data[0] = { name, marks };
      //   data.length ?? data.pop();
      //   data.push({ name, marks });
    }
  });
  console.log(data);
  return data;
};
highestMarks([
  { name: "Krutika", marks: 95 },
  { name: "Shubham", marks: 85 },
  { name: "Sakshi", marks: 90 },
]);
