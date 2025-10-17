const numbers = [1,2,3,4,5];
const doubled= numbers.map((num)=>num *2);
console.log(doubled);


const fruits=["apple","bannana","orange"];
const upperFruits=fruits.map((fruit)=>fruit.toUpperCase());
console.log(upperFruits);

const prices=[10,20,30];
const priceTags=prices.map((price) => "$" + price);
console.log(priceTags);

const products=[100,50,200];
const withTax= products.map/((price)=>price*1.08);
console.log(withTax);

const users= [
    {name: "Alice",age: 25},
    {name: "Bob",age: 20},
    {name: "Charlie",age: 30},
]
const names= users.map((user) => user.name);
console.log(names);

const rectangles = [
    {width:10, height:5},
    {width:8, height:9},
    {width:12, height:4},
];


