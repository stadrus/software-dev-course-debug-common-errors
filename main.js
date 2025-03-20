// Problem One: syntax error
// console.log("Welcome to the bootcamp
// SyntaxError: Invalid or unexpected token
// This code is missing the closed parenthesis
// fix:
console.log("Welcome to bootcamp");

// Program Two: runtime error
// let numbers = [2, 4, "eight"];
// for (let i = 0; i < numbers.length; i++) {
//   let doubled = numbers[i] * 2;
//   console.log(doubled);
// }
// Problem: "eight is a string and cannot be multiplied"
// fix:
let numbers = [2, 4, 8];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// Problem Three: 
// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return true;  // change to false
//       }
//     }
//     return false; // should be true
//   }
  
//   console.log(isPrime(7)); // Expected true but gets false
// 
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;  // change to false
      }
    }
    return true; // should be true
  }
  
  console.log(isPrime(7)); // Expected true but gets false