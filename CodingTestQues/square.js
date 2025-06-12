var square1 = { x: 2, y: 3, area: () => this.x * this.y };

function Square(x, y) {
  this.x = x;
  this.y = y;
  this.area = () => this.x * this.y;
}

var square2 = new Square(2, 3);

console.log(square1.area(), square2.area()); //NaN 6
