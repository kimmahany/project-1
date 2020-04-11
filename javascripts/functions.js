// jshint esversion: 7

//Req. 3B
let arrAvg = arr => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

//Req. 3C
let arrMax = arr => {
  let currentMax = -Infinity;
  arr.forEach(function(num) {
    if (num > currentMax) {
      currentMax = num;
    }
  });
  return currentMax;
};

// Req. 3D
let sumEvens = arr => {
  let sum = 0;
  let n = 0;
  for (let i of arr) {
    if (n % 2 == 0);
    sum = sum + n;
  }
  return sum;
};
