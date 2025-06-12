function EmployeeName(name) {
  this.name = name;
  this.getName = () => this.name;
}

var emp = Object.create(new EmployeeName("John"));
delete emp;

console.log(emp.getName()); //John
