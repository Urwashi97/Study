/**
Sample input: [{ name: "Prakash", address: "123 Main St" }, { name: "Sakshi", address: "456 Oak Dr" }]
Expected output: [{ name: "Prakash", address: "123, Main, St" }, { name: "Sakshi", address: "456, Oak, Dr" }]
 */

replace = (arr) => {
  const data = [];
  arr.forEach((element) => {
    const { name, address } = element;
    const newAddress = address.replaceAll(" ", ", ");
    data.push({ name, address: newAddress });
  });
  console.log(data);
  return data;
};

replace([
  { name: "Prakash", address: "123 Main St" },
  { name: "Sakshi", address: "456 Oak Dr" },
]);
