// ## Array Cardio Day 2

const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 }
];

const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const peopleSome = people.some(e => new Date().getFullYear() - e.year >= 19);
console.log(peopleSome);

// Array.prototype.every() // is everyone 19 or older?
const peopleEvery = people.every(e => new Date().getFullYear() - e.year >= 19);
console.log(peopleEvery);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const filter = comments.filter(e => e.id === 823423);
console.log(filter);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const find = comments.findIndex(e => e.id === 823423);
comments.splice(find, 1);
console.log(comments);
