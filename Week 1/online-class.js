// let firstName = "tejasvi";
// let age = 18;
// let isMarried = "monkey";

// if (isMarried == true) {
//     console.log(firstName + " is married");
// }

// if (isMarried == false) {
//     console.log(firstName + " is not married");
// }

// else {
//     console.log(firstName + " is married");
// }

// console.log("this person name is "+ first + " and their age is" + age);

// let answer = 0;

// for (let i = 0; i <= 100; i = i + 1) {
//   answer = answer + i;
// }

// console.log(answer);

// for (let i = 1; i <= 100; i++){
//     console.log(i);
// }

// write a program to great a person given thier first name and last name

// function greet(firstName, lastName) {
//   return firstName + " " + lastName;

// }

// console.log(greet("Tejasvi", "Raj"));

// write a program that greets a person based on thier gender .

// function greets(firstName, lastName, gender) {
//   let fullName = firstName + " " + lastName;

//   let greeting;

//   // Check the gender and set the appropriate greeting
//   if (gender === "male") {
//     greeting = "Hello, Mr. " + fullName + "!";
//   } else if (gender === "female") {
//     greeting = "Hello, Ms. " + fullName + "!";
//   } else {
//     greeting = "Hello, " + fullName + "!";
//   }

//   console.log(greeting);
// }

// greets("Tejasvi", "Raj", "male");
// greets("Priya", "Kumar", "female");
// greets("Alex", "Taylor", "non-binary");

//write a program print all the even number is an array

// const ages = [21, 22, 23, 24, 25, 26, 100]
// const numberofPeople = ages.length;

// for (let i = 0; i< numberofPeople; i++){
//   if(ages[i] % 2 == 0){

//     console.log(ages[i]);

//   }
// }

// const alluser = [{
//   firstName : "tejaviraj",
//   gender: "male"
// },

// {
//   firstName : "raman",
//   gender : "male"
// },

// {
//   firstName : "priya",
//   gender : "female"
// }
// ]

// for (let i = 0; i < alluser.length; i++) {
//   if (alluser[i]["gender"] == "male") {
//     console.log(alluser[i]["firstName"]);
//   }
// }

// function sum(a, b) {
//   const sumValue = a + b;
//   return sumValue;
// }

// const value = sum(1, 2);
// const value2 = sum(1, 10);
// console.log(value);

function calculateAirthmetic(a, b, type) {
  if (type == "sum") {
    const value = sum(a,b)
    return a + b;
  }

  if (type == "minus") {
    const value = sub(a,b)
    return a - b;
  }
}

function sum(a, b) {
  return a + b;
}

function sub(a,b){
  return a - b;
}

const value = calculateAirthmetic(1, 2, "sum");
console.log(value);


const a = 100;
const b = '100';

console.log(a == b)