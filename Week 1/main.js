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

const ages = [21, 22, 23, 24, 25, 26, 100]
const numberofPeople = ages.length;


for (let i = 0; i< numberofPeople; i++){
  if(ages[i] % 2 == 0){
    
    console.log(ages[i]);

  }
}