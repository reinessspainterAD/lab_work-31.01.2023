"use strict";
const a = 13.890123;
const b = 2.891564;
const n = 3;


let complexOne = a - Math.trunc(a);
let complexTwo = b - Math.trunc(b);
console.log("Дробная часть числа а: ", Math.trunc(complexOne * 10 ** n));
console.log("Дробная часть числа b: ", Math.trunc(complexTwo * 10 ** n));

console.log("Сравнение дробных частей a < b :", complexOne < complexTwo);
console.log("Сравнение дробных частей: a > b :",complexOne > complexTwo);
console.log("Сравнение дробных частей: a <= b :",complexOne <= complexTwo);
console.log("Сравнение дробных частей: a >= b :",complexOne >= complexTwo);
console.log("Сравнение дробных частей: a === b :",complexOne === complexTwo);
console.log("Сравнение дробных частей: a != b :",complexOne != complexTwo);