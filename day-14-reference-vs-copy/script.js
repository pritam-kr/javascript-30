// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age);
age = 200;
console.log(age, age2); // 200 100

let name1 = "Bharati";
console.log(name1);
let name2 = name1;
console.log(name1, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
team[3] = 'Lux';

// however what happens when we update that array?
console.log(team, players); 
// Updated to 'Lux'. Team is a reference to the original array

// now here is the problem!
// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
console.group('Slice');
const team2 = players.slice(0);
console.log(team2);
team2[2] = 'John';
console.log(team2, team, players);
console.groupEnd('Slice');

// or create a new array and concat the old one in
console.group('Concat')
const team3 = [].concat(players);
console.log(team3);

team3[2] = 'John';
console.log(team3, team, players);
console.groupEnd('Concat');

// or use the new ES6 Spread
console.group('ES6 Spread')
const team4 = [...players];
console.log(team4);
team4[2] = 'John';

console.log(team4, team, players);
console.groupEnd('ES6 Spread')

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:

// how do we take a copy instead?
const person2 = Object.assign({}, person, {number : 99});
console.log(person, person2);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const person3 = {...person, number:30};
console.log(person3);

