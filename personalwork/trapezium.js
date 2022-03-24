module.exports = class Trapezium {
  constructor(a, b, h) {
    (this.a = a), (this.b = b);
    this.h = h;
  }
  area() {
    return ((this.a + this.b) / 2) * this.h;
  }
};
