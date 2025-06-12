function Employee(name, dept) {
  this.name = name;
  this.dept = dept;
}

var emp = Object.create(Employee);
console.log(emp, emp.length); //2
