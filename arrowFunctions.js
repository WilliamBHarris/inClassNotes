/*
-Also called fat arrow functions
-They are not declarations.
-They do not get hoisted.
-There are 2 types:
    Concise Body --> Return is automatic
    Block body ----> Return is not automatic
-A concise way to wtie a function expression.
*/

// Concise body
// speak('dog'); <-- example to show is doesn't hoist
let speak = (name) => console.log(`The ${name} goes woof!`);

speak('dog');

let firstName = 'Peter';
let lastName = 'Parker';

let concatName = (firstName, lastName) => `${firstName} ${lastName}`;

let fullName = concatName(firstName, lastName);
console.log(fullName);

// Block Body
// Use { } to contain logic
let speakAgain = name => {
    console.log(`The ${name} goes woof! - This is line 27 console.log`);
}

speakAgain('dog');

let concat = (first, last) => {
    return `${firstName} ${lastName}`
}

let newFullName = concat(firstName, lastName);
console.log(newFullName);

let x = 27;
let y = 47;

let sum = (num1, num2) => {
    return num1 + num2
}

let returnedValue = sum(x, y);

console.log(returnedValue);