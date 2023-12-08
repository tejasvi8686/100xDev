//write a program that prints all the male people's first name given a complex object.

// const personArray = ["tejasvi", "abhiraj", "harkirat"];

// const genderArray = ["male", "male", "female"];

// const numberofUsers = personArray.length;
// for (let i = 0; i < numberofUsers; i++) {
//   if (genderArray[i] == "male") {
//     console.log(personArray[i]);
//   }
// }

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
    firstName: "harkirat",
    gender: "female",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] === "male") {
    console.log(allUsers[i]["firstName"]);
  }
}
