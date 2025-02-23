// console.log("Hello World");

//var 
//I WILL NEVER USE var
//I WILL NEVER USE var
//I WILL NEVER EVER EVER EVER USE var

let name = "Izzy Dior"; // anything in quotation marks are strings
const age = 35; //whole numbers are integers

console.log(name);
console.log(age);

console.log("Hello" + " " + name);
console.log("Hello " +  name);

console.log("Hello " + name + " Your age is " + age );
console.log(`Hello ${name}, you are ${age} years old.`);


let firstName = "Izzy";
let lastName = "Dior"
let fullName = firstName + " " + lastName;
conole.log(`Hello ${fullName} nice to meet you!!`);

//npm i readline-sync, Installs prompt input for node (Terminal)
const readline = require("readline-sync")

let userName = readline.question("What is your name? ");
 console.log(`Hello ${userName}`)

let firstName2 = readline.question("What is your name? ");
let beyonce = readline.question("Are your ready for the Beyonce concert? ");
console.log(`Hell yeah!! ${firstName2} I'm so excited to party with you!! `);