/**
 Sample input: [{ number: 5 }, { number: 3 }, { number: 6 } ]
Expected output: [ { number: 5, factorial: 120 }, { number: 3, factorial: 6 }, { number: 6, factorial: 720 }]
 */

factorial = (arr) => {
  const data = [];
  arr.forEach((ele) => {
    const { number } = ele;
    let num = 1;
    for (i = 1; i <= number; i++) {
      num = num * i;
    }
    data.push({ number, factorial: num });
  });
  console.log(data);
  return data;
};

factorial([{ number: 5 }, { number: 3 }, { number: 6 }]);
