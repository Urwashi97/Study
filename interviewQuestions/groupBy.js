/**
Sample input: [{ id: 1, name: "Shubham", departmentId: 101 }, { id: 2, name: "Krutika", departmentId: 101 }, { id: 3, name: "Sakshi", departmentId: 102 }]
Expected output: { 101: ["Shubham", "Krutika"], 102: ["Sakshi"] }
 */

groupBy = (arr) => {
  console.log(arr.groupBy(arr.departmentId));
};
groupBy([
  { id: 1, name: "Shubham", departmentId: 101 },
  { id: 2, name: "Krutika", departmentId: 101 },
  { id: 3, name: "Sakshi", departmentId: 102 },
]);
