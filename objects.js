// Objects notes:

/* 
Objects are a JS datatype that hold key: value, pairs.
*/
// Curly brackets denote an object, objects REQUIRE two main attributes: 'key: and value,'
// Objects can hold numbers, strings, booleans, arrays, and other objects.

let netflix = {
  id: 1,
  name: "The Office",
  isRunning: false,
  season1: {
    seasonInfo: {
      episodeInfo: [
        {
          episode: 1,
          episodeName: "Pilot",
        },
        {
          episode: 2,
          episodeName: "Diversity Day",
        },

        {
          episode: 3,
          episodeName: "Health Care",
        },
        {
          epidode: 4,
          episodeName: "The Alliance",
        },
        {
          episode: 5,
          episodeName: "Basketball",
        }]
    }
  },
  season2: {},
  season3: {}
};

// Use dot and bracket notation to console.log episode name of episode 2.

console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);


/************************************************************/

                       // *JSON Object
/*
- JSON stands for Javascript Object Notation.
- derived from JSON syntax, JSON format is text only.
- Since it is text only, it exsists as a 'string'
    - Useful when fetching data from a server(back-end application or logic).
    - Needs to be converted to a native Javascript object if we want to access the data.
*/

// Bracket Notation / Property Accessors
// Property accessors: dot notation '.' , and [bracket notation]

// created a variable that stores an empty object.
let superHero = {};
// we can target as a whole, with bracket notation. Then inject it with a key which is a 'string',
superHero['name'] = 'Spider-Man';
//assigning a second key and value.
superHero['alterEgo'] = 'Peter Parker';

console.log(superHero);
console.log(superHero['name'],superHero['alterEgo']);
console.log(superHero.name);

// All keys and objects are strings even though they aren't wrapped in quotes when represented in the object itself.

let test = Object.keys(superHero);
console.log(test);
console.log(typeof test[0]);

// Another Example :

let spacedObject = {
    'Spaces Here': true,
    noSpaces: true
}
// Square brackets is good when we may not be able to use dot notation, BUT is not common.
console.log(spacedObject.noSpaces);
console.log(spacedObject["Spaces Here"]);