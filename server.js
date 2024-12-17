// console.log("server file is running");
// console.log("hello");
// console.log("90");
// console.log("you will do great dont worry, just keep pushing yourself");

// // callback function functionality
function callback(){
    console.log("hello guys, hope you are doing well");

}

const add = function(a,b, callback){
    var result = a+b;
    console.log("result is ", result);
    callback();
}
add(3,8,callback);
console.log("hello");
console.log("hello");




// now use of files that ate embedded in node.js
// os function is used to get all the details of the user, and the file
// fs function is used to create the file, append the file

var fs=require('fs');
var os= require('os');
var user= os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt', 'hi' + user.username + '!\n',()=>{
    console.log('file is created');
});

// getting some functions from notes.js
const note =require('./notes.js');

console.log(note);


// conversion of string into objects using json
const jsonString = '{"name" :"mehak", "age": 19, "city" :"Kangra"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);