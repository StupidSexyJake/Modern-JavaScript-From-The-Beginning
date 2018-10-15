/* const sayHello = function() {
    console.log("Hello");
} */

/* const sayHello = () => {
    console.log("Hello");
} */

// const sayHello = () => console.log("Hello");

// const sayHello = () => "Hello";

//const sayHello = () => ({ msg: "Hello" });

// const sayHello = name => console.log(`Hello ${name}`);

// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Jake", "Clayton");

const users = ["Jake", "Nathan", "John", "William"];

// const nameLengths = users.map(function(name) {
//     return name.length;
// });

// const nameLengths = users.map((name) => { return name.length; });

const nameLengths = users.map(name => name.length);

console.log(nameLengths);