const circle = require("./circle.js");
const Trapezium = require("./trapezium");
const myTrapezium = new Trapezium(2, 3, 4);
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
console.log(`The cicunference of the cirlce is ${circle.circumference(5)}`);
console.log(`the area of the trapezium is ${myTrapezium.area()}`);
