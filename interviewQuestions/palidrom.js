/**
Sample input: [{ name: "Nitin" }, { name: "Shubham" }, { name: "Nayan" }]
Expected output: [{ name: "Nitin" }, { name: "Nayan" }]
 */
palindrom = (arr) => {
  const palindromName = [];
  arr.forEach((ele) => {
    const { name } = ele;
    const newName = name.toLowerCase();
    let palindrom = false;
    for (i = 0; i < (name.length - 1) / 2; i++) {
      if (newName.charAt(1) == newName.charAt(newName.length - 1 - 1))
        palindrom = true;
      else {
        palindrom = false;
        break;
      }
    }
    if (palindrom) palindromName.push(name);
  });
  console.log(palindromName);
  return palindromName;
};

palindrom([{ name: "Nitin" }, { name: "Shubham" }, { name: "Nayan" }]);
