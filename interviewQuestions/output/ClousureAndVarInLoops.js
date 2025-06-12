for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 output
 3
 3
 3
 */
//var i is function-scoped, so all timeouts share the same i, which becomes 3 after the loop.
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 output
0
1
2
*/