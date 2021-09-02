/* 
Two general phases when we run code.
-Creation phase
    Any variable (let, var, const) and function in our code are stored to memory.

-Execution phase
 Values are assigned to the variable and functions that were stored to memory during the creation phase

The left of the assignment operator (=) is stored to memory, right side is assigned during execution.
 */


/* 
(create)       (execution)
let variable = value;

*/

// 1. 'num' has been hoisted - JS recognized our variable, it knows it exists.
// 2.  JS reads top to bottom, when we called out console.log first it doesn't get the value of 'num'. 
// console.log(num);
// let num = 12;

sayHi();

function sayHi(){
    console.log('Hello');
    let hi = 'Aloha';
    console.log(hi);
}

varFunc();

let varFunc = function(){
    console.log('Anything');
}
