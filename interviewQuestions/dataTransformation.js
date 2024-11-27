const data = [
  { name: "cat", value: 17, group: "animal" },
  { name: "dog", value: 6, group: "animal" },
  { name: "snak", value: 2, group: "animal" },
  { name: "tesla", value: 11, group: "car" },
  { name: "bmw", value: 23, group: "car" },
];

const dataTransform = Object.values(
  data.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = { name: item.group, children: [] };
    acc[item.group].children.push(item.name);
    return acc;
  }, {})
);
console.log(dataTransform);

//Output
// [
//   { name: "animal", children: ["cat", "dog", "snak"] },
//   { name: "car", children: ["tesla", "bmw"] },
// ];
