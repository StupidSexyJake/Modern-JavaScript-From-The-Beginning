// let a, b;

// [a, b] = [100, 200];

// // Rest pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);

// console.log("::::::::::::::::::::::::");

// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(a,b);
// console.log(rest);

// const people = ["John", "Beth", "Mike"];
// const [person1, person2, person3] = people;

// function getPeople() {
//     return ["John", "Beth", "Mike"];
// }
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3)

const person = {
    name: "John Doe",
    age: 34,
    city: "Sydney",
    gender: "Male"
}
// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.gender;
// New ES6
const { name, age, city, gender } = person;
console.log(name, age, city, gender);