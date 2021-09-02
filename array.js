/*
Example:
    let array = [value, value, value];
index position:    0      1      2
*/

let arr = ['first value', 'second value', 'third value'];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//.length with an array:

console.log(arr.length);
console.log(arr[arr.length -1]);

// Using an array constructor.
let test = new Array();
console.log(test);
console.log(test.length);


//created an array with 3 empty items
let test2 = new Array(3);
console.log(test2);
console.log(test2.length);
// we can target an specific value, and assigned it a proper value.
test2[0] = 'New Value';
console.log(test2);

//Initializing array values.
let nums = Array(1, 2, 3, 4, 5);

console.log(nums);

let strings = Array('One', 'Two', 'Thrice');
console.log(strings[1]);


//  **** Methods ****

//Methods are a way to pull out and/or manipulate the data within our arrays.

//forEach(), method runs a funcrtion over each index of our array
let boardGames = ['Scrabble', 'Chess', 'Monopoly', 'DnD', 'Clue'];

for(i = 0; i < boardGames.length; i++){
    console.log(boardGames[i]);
};

// Concise body arrow Function:

boardGames.forEach(game => console.log(`Concise: ${game}`));

// Block body arrow function:

boardGames.forEach(game => {
    console.log(`Block: ${game}`);
});

// Anonymous Function:

boardGames.forEach(function(game){
     console.log(`Anon: ${game}`);
});

// Various other methods:
// Array.length => returns the number of elements in the array

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.length);

// Array.push() -> this adds an element to the end of the array.

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
shoppingList.push('mint');
console.log(shoppingList);

//  Array.pop()  -> Removes the last element of the array, and returns that element

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
shoppingList.pop();
console.log(shoppingList);

// Array.unshift() - > this adds a new element at the beginning of the array.
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
shoppingList.unshift('salt');
console.log(shoppingList);

// Array.shift() ->  This removes the first element in the array, and returns that element.

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
shoppingList.shift();
console.log(shoppingList);

// Array.map() -> transforms the elements in the original array by calling the given function once for each element in the array.

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.map(item => item.toUpperCase()));

// Array.filter() -> This creates a new array with only the elements that pass the test in a given function.
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.filter(item => item.startsWith('l')));

// Array.find() -> return the first element in the array that passes a test given in the function
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.find(item => item.startsWith('l')));

// Array.reduce() -> this executes a given function for each value of the array and returns a single value.

let costs = [2.00, 3.00, 4.00, 13.00, 9.00];
console.log(costs.reduce((total, costs) => total + costs));

// Array.includes() -> determines wether an array has a specific element. Returns boolean value type.

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.includes('limes'));
console.log(shoppingList.includes('salt'));

// indexof() -> searches array for a specific element and returns it first index. Returns -1 if element is not found.

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.indexOf('limes'));
console.log(shoppingList.indexOf('salt'));

// Array.findIndex() -> Returns the index of the first element in an array that passes the test given in a function.
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.findIndex(item => item.startsWith('g')));

// Array.every() -> checks if all elements in an array pass a test given as a function.  If there is one element that returns a false value, the function returns false, and does not check the rest of the elements.

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.every(item => item.length > 1));

// Array.concat() -> merges two or more array, and returns a new array

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
let secondList = ['mints', 'salts', 'simple syrup'];
console.log(shoppingList.concat(secondList));

// Array.slice() -> selects a part of an array, and returns a new array. It selects the elements starting at the provided argument, and ends at, but does *NOT* include the provided end argument.
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.slice(1, 4));

// Array.splice() -> add/removes elements in an array and returns the new elements.  First argument takes an integer that specifies at what index to add/remove elements. Second argument takes in the number of items to be removed. Optional: Third argument takes in the new elements to be added to the array.

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
shoppingList.splice(2, 1);
console.log(shoppingList);

shoppingList.splice(2, 1, 'cherries');
console.log(shoppingList);

// Array.sort() -> sorts the items in an array. The sort order can be either alphabetic or numeric. Also is ascending or descending. By default, sort() orders the values as 'strings' and alphbetical and ascending order. Can take in a compare function which indicates if you want to sort by ascending or descending order.

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.sort());

let costs = [3, 2, 13, 4];
// example: want to sort by descending order.
console.log(costs.sort((a, b) => b - a));
// example: sorting by ascending order:
console.log(costs.sort((a, b) => a -b));

// Array.reverse() -> Reverse the order of elements in a array.

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.reverse());

// Array.toString() -> coverts an array into a string.

let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.toString());

// Array.join() -> converts the elements of an array into a string. Can accept an optional parameter, 'seperator', which indicates how the elements will be seperated. Default is a comma.
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.join('! and '));

//  An ES6 feature:::  the spread operator. The spread operator is indicated by these 2 dots "..." it expands the contents of the array and takes it out of the array structure.
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(...shoppingList);

