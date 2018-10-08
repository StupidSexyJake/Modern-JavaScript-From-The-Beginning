// ***************
// Log to console
// ***************

/* console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a: 1, b:2, c:3});

console.table({a:1, b:2, c:3});
console.error('This is some error');
console.clear();
console.warn('This is a warning');

console.time('Hello');
    console.log('Hello World');
    console.log(123);
    console.log(true);
    var greeting = 'Hello';
    console.log(greeting);
    console.log([1,2,3,4]);
    console.log({a: 1, b:2, c:3});
console.timeEnd('Hello'); */






// *************
// Variables
// *************

// var

/* var name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

var welcome;
console.log(welcome); // UNDEFINED
welcome = "G'day mate!";
console.log(welcome); */

// let

/* let name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

let welcome;
welcome = "G'day mate!";
console.log(welcome); */

// const

/* const name = "John";
console.log(name);
// name = "Sarah"; // ERROR
// const greeting; // ERROR

const person = {
    name: "John",
    age: 30
}
console.log(person);
person.name = "Sarah";
console.log(person);

const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6);
console.log(numbers); */






// **********
// Data Types
// **********

// Primitives

/* const name = "John Doe";
console.log(typeof name);

const age = 45;
console.log (typeof age);

const hasKids = true;
console.log(typeof hasKids);

const car = null;
console.log(typeof car);

let test;
console.log(typeof test);

const sym = Symbol();
console.log(typeof sym); */

// Reference Types - Objects

/* const hobbies = ['movies, music'];
console.log(typeof hobbies);

const address = {
    city: "Gold Coast",
    state: "QLD"
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today); */






// :::::::::::::::::
// Type Conversion
// :::::::::::::::::

/* let val;

// Number to String
val = 5;
val = String(5);
val = String(4+4);
// Boolean to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1,2,3,4]);
// .toString() method
val = (5).toString();
val = (true).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

console.log("::::::::::::::::::::::");

// String to Number
val = "5";
val = Number("5");
// Boolean to Number
val = Number(true); // = 1
val = Number(false); // = 0
// Null to Number
val = Number(null); // = 0
// String to Number
val = Number("Hello"); // = NaN
// Array to Number
val = Number([1,2,3,4]); // = NaN
// parseInt() method
val = parseInt("100.30");
val = parseFloat("100.30");

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.log("::::::::::::::::::::::");

// Type coercion
let val1;
const val2 = 6;
let sum;

val1 = 5;
val1 = String(5);

sum = val1 + val2;
sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum); */





// ::::::::::::::::
// Numbers and Math Object
// ::::::::::::::::

/* const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math objects

val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(3,3);
val = Math.min(24, 44, 33, 8, 16, 5, 48, -1, 4, 0);
val = Math.max(24, 44, 33, 8, 16, 5, 48, -1, 4, 0);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1);

console.log(val); */

// ::::::::::::::::
// String Methods
// ::::::::::::::::

/* const firstName = "William";
const lastName = "Johnson";
const age = 36;
let val;
const str = "Hello my name is Jake";
const tags = "web design,web development,programming";

val = firstName + lastName;
val = firstName + " " + lastName;

val = "Jake ";
val += "Clayton";

val = "Hello, my name is " + firstName + " and I am " + age;

val = 'That\'s awesome, I can\'t wait';

val = firstName.length;

val = firstName.concat(' ', lastName);

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[4];
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

val = firstName.charAt("1");
val = firstName.charAt(firstName.length - 1);

val = firstName.substring(0, 4);

val = firstName.slice(0, 4);
val = firstName.slice(-3);

val = tags.split(",");

val = str.replace("Jake", "Jakey");

val = str.includes("Hello");
val = str.includes("foo");

console.log(val); */

// :::::::::::::::::::
// Template literals
// :::::::::::::::::::

/* const name = "Jake";
const age = 32;
const job = "Web Developer";
const city = "Gold Coast";
let html;

// Without template strings

html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job: " + job + "</li><li>City: " + city + "</li></ul>";

html =  "<ul>" + 
            "<li>Name " + name + "</li>" +
            "<li>Age: " + age + "</li>" +
            "<li>Job: " + job + "</li>" + 
            "<li>City: " + city + "</li>" +
        "<ul>";

// With template literals

function hello(){
    return "hello";
}

html =  `<ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${city}</li>
            <li>${2 + 2}</li>
            <li>${hello()}</li>
            <li>${age > 30 ? "Over 30" : "Under 30"}</li>
        </ul>`;

document.body.innerHTML = html; */

// :::::::::::
// Arrays
// :::::::::::

/* const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Pear", "Pineapple", "Bannana", "Orange"];
const mixed = [22, "Hello", true, undefined, null, {a:1, b:2}, new Date()];

let val;

val = numbers.length;
val = Array.isArray(numbers);
val = numbers[3];
numbers[2] = 100;
val = numbers.indexOf(36);

numbers.push(9);
numbers.unshift(250);
numbers.pop();
numbers.shift();
numbers.splice(1,3);
numbers.reverse();

val = numbers.concat(numbers2);

val = fruit.sort();
val = numbers.sort();

val = numbers.sort(function(x,y){
    return x-y;
});

val = numbers.sort(function(x,y){
    return y-x;
});

function under50(num){
    return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val); */





// ::::::::::::::::
// Object literals
// ::::::::::::::::

/* const person = {
    firstName: "Jake",
    lastName: "Clayton",
    age: 32,
    email: "jake@goldcoastmaids.com.au",
    hobbies: ["music", "sports"],
    address: {
        city: "Gold Coast",
        state: "QLD"
    },
    getBirthYear: function() {
        return 2018 - this.age;
    }
}

let val;

val = person;
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: "John", age: 28},
    {name: "Mike", age: 33},
    {name: "Nancy", age: 40}
];

for (let i = 0; i < people.length; i++){
    console.log(people[i].name);
} */




// :::::::::::::::
// Date and Time
// :::::::::::::::

/* let val;
const today = new Date();
let birthday;

val = today;
val = today.toString();

birthday = new Date("9-1-1986 11:25:00");
birthday = new Date("September 1 1986");
birthday = new Date("9/1/1986");

val = birthday;

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(val);
console.log(typeof val);
console.log(birthday); */




// :::::::::::::::::
// If statements & Comparison Operators
// :::::::::::::::::

/* const id = "100";

if (id == 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

if (id != 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

if (id === 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

if (id !== 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

const id2 = "100";

if (typeof id2 !== "undefined") {
    console.log(`The ID is ${id2}`);
} else {
    console.log("NO ID");
}

if (id >= 200) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

const color = "yellow";

if (color === "red") {
    console.log("Color is red");
} else if (color === "blue") {
    console.log("Color is blue");
} else {
    console.log("Color is not red or blue")
}

const name = "Steve";
const age = 67;

if (age > 0 && age <= 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

if (age < 16 || age > 65) {
    console.log(`${name} cannot run in the race`);
} else {
    console.log(`${name} is registered for the race`);
}

console.log(id === 100 ? "CORRECT" : "INCORRECT");

if (id === 100)
    console.log("Correct");
else
    console.log("Incorrect"); */



// ::::::::::::::::
// Switches
// ::::::::::::::::

/* const color = "yellow";

switch(color){
    case "red": 
        console.log("Color is red");    
        break;
    case "blue":
        console.log("Color is blue");
        break;
    default:
        console.log("Color is not red or blue");
}

let day;

switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

console.log(`Today is ${day}`); */




// :::::::::::::::::
// Functions
// :::::::::::::::::

// Function declaration

/* function greet() {
    console.log("Hello");
    return "Hello";
}
greet();

function greet2(firstName, lastName) {
    if (typeof firstName === "undefined"){
        firstName = "Steve";
    }
    if (typeof lastName === "undefined"){
        lastName = "Smith";
    }
    return "Hello " + firstName + " " + lastName;
}
console.log(greet2("John", "Doe"));
console.log(greet2());

function greet3(firstName = "Steve", lastName = "Smith") {
    return "Hello " + firstName + " " + lastName;
}
console.log(greet3());

// Function expressions

const square = function(x = 3){
    return x*x;
}
console.log(square(8));
console.log(square());

// IIFEs

(function(){
    console.log('IIFE Ran...');
})();

(function(name){
    console.log("Hello " + name);
})("Brad");

// Property Methods

const todo = {
    add: function() {
        console.log("Add todo...");
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log("Delete todo");
}

todo.add();
todo.edit(22);
todo.delete(); */




// :::::::::::::::
// Loops and iteration
// :::::::::::::::

/* // For loop
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("2 is my favourite number");
        continue;
    }
    if (i === 4) {
        console.log("Stop the loop");
        break;
    }
    console.log(i);
}

console.log(":::::::::::::::::::");

// While loop

let j = 0;
while (j < 10) {
    console.log("Number " + j);
    j++;
}

// Do While loop
let k = 100;
do {
    console.log("Number " + k);
    k++
}
while(k <10);

// Iterating through array
const cars = ["Ford", "Mazda", "Holden", "BMW"];
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

cars.forEach(function(car, index, array){
    console.log(`${index}: ${car}`);
    console.log(array);
});

// Map method
const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Sarah"},
    {id: 3, name: "Bob"},
    {id: 4, name: "Tim"}
]
const ids = users.map(function(user){
    return user.id;
});
console.log(ids);


// For In loops
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 40
}
for(let x in user) {
    console.log(`${x} : ${user[x]}`);
} */




// Window methods, objects and properties

/* const input = prompt("What's your name");
alert(input); */

/* if(confirm("Are you sure?")){
    console.log("YES");
} else {
    console.log("NO")
} */

/* let val;

val = window.outerHeight;
val = window.outerWidth;
val = window.innerHeight;
val = window.innerWidth;

val = window.scrollY;
val = window.scrollX;

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//window.location.reload();
//window.location.href = "http://google.com";
//window.history.go(-1);

val = window.history.length;

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val); */