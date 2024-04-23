//write a program print all the even number in an array.

// let person1 = "harkirat";
// let person2 = "raman";
// let person3 = "raman";

// const personArray = ["harkirat", "tejasvi", "abhiraj"];

const ages = [2, 3, 7, 8, 33, 22, 24];
const numberofpeople = ages.length;

for (let i = 0; i < numberofpeople; i++) {
  if (ages[i] % 2 === 0) {
    console.log(ages[i]);
  }
}

// write a program to print the biggest number in an array

const lgno = [20, 25, 30, 35, 40, 45, 50, 55];

let biggestNumber = lgno[0]; // Assume the first number is the biggest initially

for (let i = 1; i < lgno.length; i++) {
  if (lgno[i] > biggestNumber) {
    biggestNumber = lgno[i]; // Update biggestNumber if a larger number is found
  }
}

console.log("The biggest number in the array is:", biggestNumber);

///

// const personArray = ["harkirat", "raman", "priya"];
// const genderArray = ["male", "male", "female"];

// for (let i =0; i<personArray.length; i++){
//   if(genderArray[i] == "male"){
//     console.log(personArray[i]);
//   }
// }

// const users1 = {
//   firstname: "tejasvi",
//   gender: "male",
// }

// console.log(users1['gender']);

const allUsers = [
  {
    firstName: "tejasvi",
    gender: "male",
  },
  {
    firstName: "abhiraj",
    gender: "male",
  },
  {
    firstName: "priya",
    gender: "female",
  },
];


for (let i = 0; i<allUsers.length; i++ ){
  if(allUsers[i]["gender"] == "male"){
    console.log(allUsers[i]["firstName"]);
  }
}