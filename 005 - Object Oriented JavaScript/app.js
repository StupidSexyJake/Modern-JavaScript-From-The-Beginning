// Person constructor
/* function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const brad = new Person('Brad', "9-10-1981");

console.log(brad.calculateAge());

 */

// const name1 = "Jeff";
// const name2 = new String("Jeff");
 
// name2. foo = "bar";
// console.log(name2);
// console.log(typeof name2);

// if (name2 === "Jeff") {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

// const num1 = 5;
// const num2 = new Number(5)
// console.log(num2);

// const getSum1 = function (x, y) {
//     return x + y;
// }
// const getSum2 = new Function ("x", "y", "return 1 + 1");
// console.log(getSum2(1, 2));

// const john1 = {name: "John"};
// console.log(john1);
// const john2 = new Object({name: "John"});
// console.log(john2);

// const re1 = /\w+/;
// const re2 = new RegExp("\\w+");
// console.log(re1);
// console.log(re2);

// ::::::::::::::::::::
// Prototypes
// ::::::::::::::::::::

/* function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.age = age;
    this.birthday = new Date(dob);
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getsMaried = function (newLastName) {
    this.lastName = newLastName;
}

const john = new Person("John", "Doe", "1986-09-01");
const mary = new Person("Mary", "Johnson", "March 20 1978");

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());
mary.getsMaried("Smith");
console.log(mary.getFullName());
console.log(mary.hasOwnProperty("firstName"));
console.log(mary.hasOwnProperty("getFullName")); */

// Person constructor
/* function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// Greeting
Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}
const person1 = new Person("John", "Doe");
// console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}. Welcome to our company`;
}

const customer1 = new Customer("Tom", "Smith", "555-5555", "Standard");
console.log(customer1);
console.log(customer1.greeting()); */

/* const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`
    },
    getsMarried: function (newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Johnson";
mary.age = 45;
console.log(mary);

mary.getsMarried("Thompson");
console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    firstName: {value: "Brad"},
    lastName: {value: "Traversy"},
    age: {value: 30}
})
console.log(brad);
console.log(brad.greeting()); */

/* class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`
    }
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getsMarried(newLastName) {
        this.lastName = newLastName;
    }
    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person("Mary", "Johnson", "1 September 1986");

mary.getsMarried("Smith");

console.log(mary);

console.log(Person.addNumbers(1,2)); */

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost() {
        return 500;
    }
}
const john = new Customer("John", "Doe", "555-5555", "Standard");
console.log(Customer.getMembershipCost());