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

// // write a program to great a person given thier first name and last name

// function greet(firstName, lastName) {
//   return firstName + " " + lastName;

// }

// console.log(greet("Tejasvi", "Raj"));

// // write a program that greets a person based on thier gender .

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

// // write a program print all the even number is an array

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

// // const value = sum(1, 2);
// const value2 = sum(1, 10);
// console.log(value2);

// function calculateAirthmetic(a, b, type) {
//   if (type == "sum") {
//     const value = sum(a,b)
//     return a + b;
//   }

//   if (type == "minus") {
//     const value = sub(a,b)
//     return a - b;
//   }
// }

// function sum(a, b) {
//   return a + b;
// }

// function sub(a,b){
//   return a - b;
// }

// const value = calculateAirthmetic(1, 2, "sum");
// console.log(value);

// // slice not include last index (if 0 to 5 its include only  0 to 4)

// function getSlice(str, start, end) {
//   console.log("orignal String:" , str);
//   console.log("After Slice:" , str.slice(start, end));
// }

// getSlice("Hello World", 0,5)

// const values = "tejasvi raj";

// let ans = values.substr(2,5);//jasvi
// let ans1 = values.slice(2,5);//jas

// console.log(ans);
// console.log(ans1);

// function cuIt(str, startIndex, endIndex) {

//   let newStr = " ";
//   for (let i = 0; i< str.length; i++) {
//     if(i >= startIndex && i < endIndex) {
//       newStr = newStr + str[i]
//     }
//   }
// }

// console.log(cuIt(value, 2, 5));

// split
// const str = "hello world";

// str.replace("world" , "javascript")
// console.log(str);

// const value = "hi,my,name,is,tejasvi,raj";
// const word = value.split(",")

// console.log(word);

// console.log(parseInt("42"));
// console.log(parseInt("43dfgdg"));

// push method us for push the element is the array

// const initialArray = [1, 2, 3];

// initialArray.push(2);
// console.log(initialArray);

//pop method is used for remove the element in the array form the last

// const array = [1, 2, 3];
// array.pop();
// console.log(array);

//shift is used for remove the element

// const array1 = [1,2,3,4];
// array1.shift();
// console.log(array1);

// unshift is used for add the element for the starting

// const array2 = [1,2,3,4];
// array2.unshift(0);
// console.log(array2);

// const initialArray = [1, 2, 3];
// const secondArray = [4, 5, 6];

// for (let i = 0; i < secondArray; i++) {
//   initialArray.push(secondArray[i]);
// }

// const initialArray = [1, 2, 3];

// function logThing(str){
//   console.log(str);
// }

// initialArray.forEach(logThing);

// logThing

// class Animal {
//   constructor(name, legCount, speak) {
//     this.name = name;
//     this.legCount = legCount;
//     this.speak = speak;
//   }

//   speak() {
//     console.log("hi there" + this.speak);
//   }
// }

// let dog = new Animal("dog", 4, "bhow"); // create a object
// let cat = new Animal("cat", 4, "meow");

// cat.speak(); // call function on object


//find the aquare of the input


// callback function
// can you call one functio inside another function ? yes

function square(n){
  return n*n
}

function cube(n){
  return n*n*n
}


// find the sum of the square of the input

function sumofSquare(a, b){
  const val1 = square(a)
  const val2 = square(b)
  return val1 + val2;

}

function sumofcube(a,b){
  const val1 = cube(a)
  const val2 = cube(b)

  return val1 + val2;
}


console.log(sumofcube(2, 5));
console.log(sumofSquare(1,2));