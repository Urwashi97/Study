let arr1 = [1,2,3,4,5,5];
console.log(arr1.map(x => x).filter(x => x == 2)); //[2]

let arr2 = [1,2,3,4,5,5];
console.log(arr2.forEach(x=>x).filter(x => x==2));//undefined