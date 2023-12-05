const prompt = require("prompt-sync")();

const firstNumber = prompt("Enter first Number");
const secondNumber = prompt("Enter Second Number");

const sum = parseInt(firstNumber) + parseInt(secondNumber);
console.log("Sum of FirstNumber, SecondNumber is " + sum);

const sub = parseInt(firstNumber) - parseInt(secondNumber);
console.log("Sub of FirstNumber, SecondNumber is " + sub);

const mut = parseInt(firstNumber) * parseInt(secondNumber);
console.log("Product of FirstNumber, SecondNumber is " + mut);

const div = parseInt(firstNumber) / parseInt(secondNumber);
console.log("Division of FirstNumber, SecondNumber is " + div);

const modu = parseInt(firstNumber) / parseInt(secondNumber);
console.log("Modulus of FirstNumber, SecondNumber is " + modu);
console.log("print");
