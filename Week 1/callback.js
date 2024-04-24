// find the square of the input

function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}
// console.log(square(5));

function sumofSquare(a, b) {
  const val1 = square(a);
  const val2 = square(b);

  return val1 + val2;
}

function sumofcube(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);

  return val1+val2;
}


console.log(sumofcube(2,2));
console.log(sumofSquare(1, 2));




function square(n){
    return n+n;
}

function cube(n) {
  return n * n * n;
}

function sumofSumthing(a,b, callback){
    const val1= callback(a);
    const val2= callback(b);

    return val1+val2;
}

console.log(sumofSumthing(2,2,square));
console.log(sumofSumthing(2,2,cube));