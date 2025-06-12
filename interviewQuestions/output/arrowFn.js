const obj = {
  message: "Hello, World!",
  greet: () => console.log(this.message),
};
obj.greet();
//undefined
