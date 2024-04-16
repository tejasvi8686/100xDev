//write a function that find the sum of two number

// function sum(a, b) {
//   const sumValue = a + b;
//   return sumValue;
// }

// const value = sum(1,2);
// console.log(value);

// write another function that display this result in a preety format

// let sum = 0;

// for (let i = 0; i < 10000000; i++) {
//   sum = sum + i;
// }

// console.log(sum);

//you are only allowed to call one function after this

//How will you displayResult of a sum

function sum(num1, num2, fnToCall) {
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("sum's result is : " + data);
}

const ans = sum(1, 2, displayResultPassive);
 