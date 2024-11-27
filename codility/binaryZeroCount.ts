function solution(N: number): number {
  const binary = N.toString(2);
  const array = binary.toString().split("1");
  let count = 0;
  if (binary[binary.length - 1] == "0") {
    for (let i = 0; i < array.length - 2; i++) {
      if (array[i].length > 0 && array[i].length > count)
        count = array[i].length;
    }
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].length > o && array[i].length > count)
        count = array[i].length;
    }
  }
  return count;
}

/************************************************* Example 2 *****************************************************************/
function solution2(N: number): number {
  const binary = N.toString(2);
  const array = binary.toString().split("1");
  let maxCount = 0;
  array.forEach((ele, i) => {
    if (i == array.length - 1) {
      return;
    }
    if (maxCount < ele.length) maxCount = ele.length;
  });
  return maxCount;
}
