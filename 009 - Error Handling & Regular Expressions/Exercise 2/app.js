let re;
re = /hello/;
re = /hello/g;
re = /hello/i;
const str = "Hello there";

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec("Jake, hello world");

// test() - Returns true or false
//const result = re.test("Hello");

// match() - Return result array or null
// const result = str.match(re);

// search() - Returns index of the first match or if not found returns -1
// const result = str.search(re);

// replace() - Return new string with some or all matches of a pattern
const result = str.replace(re, "Hi");

console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);