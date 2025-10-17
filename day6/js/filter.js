
const words=["cat","elephant","dog","butterfly"];
const longWords= words.filter((word)=>word.length>4);
console.log(longWords);

const prices = [50,15,20,40,500];
const affordable = prices.filter((price)=>price<100);
console.log(affordable);

const people = [
    {name:"Alice", age:25},
    {name:"Bob", age:20},
    {name:"Charlie", age:40},
];
const adults=people.filter((person)=>person.age=>18);
console.log(adults);

