let obj = { name: "JOHN" };

function text() {
  console.log(this.name);
}
text.apply(obj);
