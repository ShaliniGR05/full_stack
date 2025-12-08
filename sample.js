// var a = 10.0;
// var b = 10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// if(a==b){
//     console.log("True");
// }
// if(a===b){
//     console.log("True");
// }

// const prompt = require("prompt-sync")();

// function valid(age){
//     if(age>18){
//         console.log("Valid Age");
//     }
//     else{
//         console.log("Invalid Age");
//     }
// }
// var age = Number(prompt("Enter Age: "));
// valid(age)

// console.log(x);
// var x = 5;

// const prompt = require("prompt-sync")();

// function fruits(f){
//     switch(f){
//         case 'a':
//             console.log("Apple");
//             break;
//         case 'b':
//             console.log("Banana");
//             break;
//         default:
//             console.log("None");
//             break;
//     }
// }
// var f = prompt("Enter alphabet: ");
// fruits(f);

// let person ={
//     name:"Shalini",
//     age:19,
//     rollno:150
// }

// for(let a in person){
//     console.log(a+":"+person[a]);
// }

// var age = 19;
// var result = age>=18?"Allowed":"Not allowed"
// console.log(result);

// const greet = (name) =>{
//     return `Hello! ${name}`
// }
// console.log(greet("Shalini"))

// we cannot use the this keyword in the arrow function

// spread operator

// const num1 = [0,1,2,3];
// const num2 = [4,5,6,7];
// const allnum = [...num1,...num2];
// console.log(allnum);

// const obj1 = {
//     name: "Shalini",
//     age: 19,
//     city: "Bhavani"
// };
 
// const final = {...obj1,place:"Bhavani"};
// console.log(final);

// const num = [1,2,3];
// const [a,b,c] = num;
// console.log(a,b,c);

// const [first, ,third] = num;
// console.log(first,third);

// const [x,y,...rest] = num
// console.log(x,y)
// console.log(rest)

// const person = {name: "Shalini",age:19};
// const {name,age} = person;
// console.log(name,age);

// const num = [1,2,3,4,5];
// const num1 = num.map(num => num*2);
// console.log(num1)

// const even = num.filter(num=>num%2===0);
// console.log(even)

// const num = [1,2,3,4,5];
// const sum = num.reduce((acc,cur)=>
//     acc + cur,0 );

// console.log(sum);

// shift and unshift

// String Operations

let str1 = "Hello";
let str2 = "World";
console.log(",",str2,"!")
console.log(str1.includes("World"))
console.log(str1.indexOf("world"))
console.log(str1.slice(0,3))
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1.replace("l","p"))

// collection name --> table name
// 
// show dbs
// show collections
// db.users.insertOne({name:"Shalini",age:19})
// db.users.insertMany([{name:"Raji",age:25},{name:"saran",age:19}])
// db.users.find()

//db.users.updateOne({age:19},{$set:{age:20}})
//db.users.find()

//db.users.deleteOne({age:19})
//db.users.find()

//db.users.find({name:{$ne:"Shalini"}})

//db.users.find({age:{$gt:21}})

//db.users.find({$or: [{age:19},{name:"Shalini"}]})

//db.users.updateOne({age:20},{$rename })

// app.get('/',(req,res)=>{
//     res.send("Welcome To the portal!");
// });

// app.get('/users/:userId',(req,res)=>{
//     const userId = req.params.userId;
//     res.send(`User ID is: ${userId}`);  
// });

// app.get('/users/:userId/profile',(req,res)=>{
//     const userId = req.params.userId;
//     const name = req.query.name;
//     const age = req.query.age;
//     res.send(`User ID is: ${userId} Name: ${name} Age: ${age}`);  
// });

// // app.get('/hello',(req,res)=>{
// //     res.send("Yes!! This is working");
// // });
// // app.get('/user',(req,res)=>{
// //     res.send("Put request is made!");
// // });









