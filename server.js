// step 1 create folder
// move into that folder
// npm init -y
// step4 open folder using vscode
// step 5 npm i express
// step 6 create server.js
// server Instantiate
// require import karta ha
const express = require('express');
const app = express();
// ;ast line se app create hota hai
// used to parse req.body in express->PUT or POST
const PORT = 3000;
const bodyParser = require('body-parser');
// specificallly parse json data &add it to the request body object or json data ko parse kroo or request ki body me daal do
// app.use(bodyParser.json());
//addingmiddleware
app.use(express.json());

// app.listen se haumne server initiate kiya hai
// joo port noo 3000 par run hoga
//yha humne server ka instance call kiya hai or fir usko listen kiya h
// activate the server 300
app.listen(PORT,()=>{
    console.log(`Server started at port no ${PORT} `)
});
// ye btata  h ki iss port par listen karna hai
app.get('/',(request,response)=>{
    response.send("hello jee"); //home page par jane par response me ye btata hai ye behaviour btata h
})
// // '/' is for home page ki jab b home page par aaoge tb usko route ko call kzr lena hota h  route ki jab b is route par jaoge  tb get request call hofii or response me send karoo hello jee

// app.post('/api/cars',(request,response)=>{
//     const {name , brand} = request.body;
//     console.log(name);
//     console.log(brand);
//     response.send("Car Submitted Successfully.");
// });
 
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/myDatabase',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{console.log("succc")})
// .catch((error)=>{
//     console.log("error")
// });
app.post("/car",(req,res)=>{
    res.send("Received a post request");
});

 