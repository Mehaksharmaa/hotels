const express = require('express')
const app = express();
const db= require('./db');
require('dotenv').config();


// // using of bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// // res stand here for response
app.get('/', function (req, res) {
  res.send('Welcome to my Hotel');
})


// // app.get('/chicken', (req, res)=>{
// //     res.send('please send this to table no.9')
// // })


// // ye is post method se hm data ko send krege

// app.post('/person', async (req, res)=>{
//   const data= req.body;
//   const newPerson = new Person(data);
//   const savedPerson = await newPerson.save();
//   // newPerson.age=data.age;
//   // newPerson.mobile=data.mobile;
//   // newPerson.work=data.work;
//   // newPerson.address=data.address;
//   // newPerson.email=data.email;



//   // this below function i have written is a callback function, so to avoid writng this we use async await that we used in javascript
  
//   // newPerson.save((error, savedPerson)=>{
//   //   if(error){
//   //     console.log('error saving person', error);
//   //     res.status(500).json({error: 'internal server error'})
//   //   }
//   //   else{
//   //     console.log('data saved succesfully');
//   //     res.status(200).json(savedPerson)
//   //   }

//   // })
// })


// get method to get the person







const personRoutes= require('./routes/routes_person');
app.use('/person', personRoutes);

const menuItems= require('./routes/routes_menu');
app.use('/menu',menuItems );



app.listen(PORT,()=>{
  console.log('Listening on port 3000');
})
