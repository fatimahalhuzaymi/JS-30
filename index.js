

"use strict";
const ps = require("prompt-sync");
const prompt = ps();

//Q1
const name = prompt("Enter your name: ");
console.log(name +" "+"Hello Welcome!");
 

//Q2
const num1 = parseInt(prompt( "Please Enter the first number: ")); 
const num2 = parseInt(prompt("Please Enter the second number: "));
const sum = num1 + num2;
console.log(sum);


//Q3

const number = parseInt(prompt("Please Enter number: ")); 
if (number %2 ==0){
    console.log("number is even");

}else {
    console.log("number is odd");
}

//4
const number = parseInt(prompt("Enter a positive number: "));
let num1 = 0, num2 = 1, nextTerm;

console.log("Fibonacci Series: ");
console.log(num1); 
console.log(num2); 

nextTerm = num1 + num2;

while (nextTerm <= number) {

     print the next term
    console.log(nextTerm);

    num1 = num2;
    num2 = nextTerm;
    nextTerm = num1 + num2;
}




//5

 take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

if (number < 0) {
   console.log('Error! Factorial for negative number does not exist.');
}

else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}



//Medium

//Q1
function add(a,b){

  return a+b;
}

//Q2

const name = prompt("Enter your name: ");
const number = parseInt(prompt("Enter your number: "));


console.log("{Name:"+name+","+"Number:"+number+"}");
