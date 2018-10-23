let re;
let str;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i;                 // ^ = Must start with
re = / world$/i;            // $ = Must end with
re = /^hello world$/i;      // Must begin with and end with hello world
re = /h.llo/i;              // . = Matches any ONE character
re = /h*llo/i;              // * = Matches any character, 0 or more times (wildcard)
// String to match
str = "Hello world";

re = /gre?a?y/i;            // ? = Optional character
re = /gre?a?y\?/i;          // \ = Escape character
// String to match
str = "Gray";

// Brackets [] - Character sets
re = /gr[ae]y/i;            // [...] = Must be characters between brackets
re = /[^GF]ray/i;           // [^...] = Must be anything except for characters between bracket
re = /[A-Z]ray/;            // [A-Z] = Must be any uppercase letter
re = /[a-z]ray/;            // [a-z] = Must be any lowercase letter
re = /[A-Za-z]ray/;         // [A-Za-z] = Must be any letter
re = /[0-9]ray/;            // [0-9] = Match any number
// String to match
str = "Gray";

// Braces {} - Quantifiers
re = /Hel{2}o/i;            // {...} = Must occur exactly specified amount of times
re = /Hel{2,4}o/i;          // {x,y} = Must occur between x and y amount of times
re = /Hel{2,}o/i;           // {x,} = Must occur at least x amount of times
// String to match
str = "Helllo";

// Parentheses () - Grouping
re = /([0-9]x){3}/;         // (...) = Grouping
// String to match
str = "3x3x3x3x";

// Shorthand Character Classes
re = /\w/;                  // \w = Word character: Match alphanumeric or underscore character
re = /\w+/;                 // + = One or more
re = /\W/;                  // \W = Non-word character
re = /\d/;                  // \d = Match any digit
re = /\D/;                  // \D = Match any non-digit
re = /\s/;                  // \s = Match whitespace char
re = /\s/;                  // \S = Match non-whitespace char
re = /Hell\b/i;             // \b = Word boundary
str = "Hello, welcome to Hell";

// Assertions
re = /x(?=y)/;              // x(?=y) = Match x only if followed by y
re = /x(?!y)/;              // x(?!y) = Match x only if NOT followed by y
str = "asdfgasfhasyt--agdf-xy-asdgsg";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}
reTest(re, str);