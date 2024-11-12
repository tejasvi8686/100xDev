//write a function to greet a person given there first and last name

function greet (firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
}

greet("Tejasvi", "Raj");


// write a program that greet a person based on thier gender

function greetperson (firstName, lastName, gender) {
    if (gender === "male") {
        console.log("Hello " + firstName + " " + lastName);
    } else if (gender === "female") {
        console.log("Hello " + firstName + " " + lastName);
    } else {
        console.log("Hello " + firstName + " " + lastName);
    }
}

greetperson("tejasvi", "raj", "male");
greetperson("tejasvi", "raj", "female");
greetperson("tejasvi", "raj", "other");


// write a rogram that count from 0 - 1000 and print (for loop)


for (let i = 0; i<= 1000; i++) {
    console.log(i);
}




