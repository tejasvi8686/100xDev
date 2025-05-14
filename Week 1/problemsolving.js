//write a function to greet a person given there first and last name

// function greet(firstName, lastName) {
//   console.log("Hello " + firstName + " " + lastName);
// }

// greet("Tejasvi", "Raj");

// write a program that greet a person based on thier gender

// function greetperson(firstName, lastName, gender) {
//   if (gender === "male") {
//     console.log("Hello " + firstName + " " + lastName + "  " + gender);
//   } else if (gender === "female") {
//     console.log("Hello " + firstName + " " + lastName);
//   } else {
//     console.log("Hello " + firstName + " " + lastName);
//   }
// }

// greetperson("tejasvi", "raj", "male");
// greetperson("tejasvi", "raj", "female");
// greetperson("tejasvi", "raj", "other");

// write a rogram that count from 0 - 1000 and print (for loop)

// for (let i = 0; i <= 1000; i++) {
//   console.log(i);
// }

// write a program to print all the even number in the array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i< arr.length; i++){
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }

// }

// write a program  to print biggest number in the array

// let arr = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let biggest = arr[0];
// console.log("The biggest number in the array is " + arr[0]);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > biggest) {
//     biggest = arr[i];

//   }
// }

// console.log(biggest);

//write a program that print all the male  people  first name given  a complex object

// let people = [
//   { firstName: "Tejasvi", lastName: "Raj", gender: "female" },
//   { firstName: "Raj", lastName: "Tejasvi", gender: "male" },
//   { firstName: "Raj", lastName: "Tejasvi", gender: "male" },
//   { firstName: "tejasvi", lastName: "raj", gender: "female" },
//   { firstName: "raj", lastName: "tejasvi", gender: "male" },
//   { firstName: "raj", lastName: "tejasvi", gender: "male" },
// ];

// for (let i = 0; i < people.length; i++) {
//   if (people[i].gender === "male") {
//     console.log(people[i].firstName + " " + people[i].lastName);
//   }
// }

// write a prgram that reverse all the elements of an array
//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  let reversed = [];
//  console.log("reversed array is", reversed);

//  for (let i = arr.length - 1; i >= 0; i--) {
//    reversed.push(arr[i]);
//  }
//  console.log(reversed);

function sum(num1, num2, fntoCall) {
  let result = num1 + num2;
  fntoCall(result);
}

function displayResult(data) {
  console.log("the sum of the two numbers is", data);
}

const ans = sum(10, 20, displayResult);
console.log("ans", ans);


function calculateAirthmatic (a,b, type){}

function calculateAirthmatic(a, b, arithmeticFinalFunction) {
  const ans =  arithmeticFinalFunction(a, b);
  
}