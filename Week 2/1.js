function square (n) {
    return n * n;
}

function cube(n) {
    return n*n*n;
    

}

function quad(n){
    return n*n*n*n
}

function sumofsomething(a,b , fn){
    let square1 = fn(a);
    console.log("sum",square1);
    let square2 = fn(b);
    console.log("sum",square2);
    return square1 + square2;
}

// function sumofCubes(a, b){
//     let square1 = cube(a);
//     console.log("cube",square1);
//     let square2 = cube(b);
//     console.log("cube",square2);
//     return square1 + square2;

// }

// let ansofsum = sumofsquare(2, 2)
// console.log(ansofsum);

let ansofcube = sumofsomething(2, 1, quad)
console.log(ansofcube);

