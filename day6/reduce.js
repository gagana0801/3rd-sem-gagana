const numbers = [1,2,3,4,5,6];
const sum= numbers.reduce((total,num)=> total + num,0);
console.log(sum);

const scores=[85,95,100,35,40];
const maxScore = scores.reduce((max,score)=> Math.max(max,score),scores[0]);
 console.log(maxScore);

 const words= ["Hello" , "World", "1"];
 const sentence = words.reduce((text,word)=>text+" "  + word, "");
 console.log(sentence.trim);

 const cart = [
    {item:"Book",price:20,quantity:2},
    {item:"Pen",price:3,quantity:5},
    {item:"Notebook",price:30,quantity:4},
 ]
 
 