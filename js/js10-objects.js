/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
      this.length = a;
      this.width = b;
      this.perimeter = 2 * (a + b);
      this.area = a * b;
}

rectangle = new Rectangle(2, 4);
console.log(rectangle.area);