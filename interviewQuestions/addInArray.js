// how to add 0, 2, 4 in this array after 8
var array = [1, 5, 6, 8, 11, 10, 20, 15];
//[1, 5, 6, 8, 0, 2, 4, 11, 10, 20, 15]

array.splice(4, 0, 0, 2, 4);
console.log(array);
