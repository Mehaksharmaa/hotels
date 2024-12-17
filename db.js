// this file will be responsible for making database connection
const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels';

// ye jo likha hai niche, usse hoga connection establish krne ke liye URL likha hai, ye required parameter jo pass krna hi pdega
mongoose.connect(mongoURL,{
     

    useNewUrlParser: true,
    useUnifiedTopology: true
})
// ab ye default connection ko lene ke liye likha hai
// mongoose maintains a default connection objetc representing the mongoDB connection
const db= mongoose.connection;

// ye niche teen event listerner hai, jo help krege database connection ke liye
db.on('connected', ()=>{
    console.log('Connected to MongoDB server');
});

db.on('error', (err)=>{
    console.error('MongoDB connection error', err);
});
db.on('disconnected', ()=>{
    console.log('MongoDB disconneted')
});


// ab iss database kon export bhi krna pdega
module.exports= db;