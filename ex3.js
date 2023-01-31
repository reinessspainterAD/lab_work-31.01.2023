"use strict";
let n = 1;
let m = 99;

let minimum = Math.min(n, m);
let maximum = Math.max(n, m);
let maxmin = maximum - minimum;
let result = Math.trunc(Math.random() * maxmin / 2) * 2 + 1;

console.log("Случайное число: ",result);