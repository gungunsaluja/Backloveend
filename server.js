// step 1 create folder
// move into that folder
// npm init -y
// step4 open folder using vscode
// step 5 npm i express
// step 6 create server.js
// server Instantiate
// require import karta ha
//is line ka mtlb hai jo expressjs ka framework h usko import kra do
// first two lines se server instantiate hota hai
const express = require('express'); //instanse initiate
const app = express();
// last line se app create hota hai function calling 
// used to parse req.body in express->PUT or POST
const PORT = 3000;
const bodyParser = require('body-parser');
// specificallly parse json data &add it to the request body object or json data ko parse kroo or request ki body me daal do
app.use(bodyParser.json());
//adding middleware
app.use(express.json());

// app.listen se haumne server initiate kiya hai
// joo port noo 3000 par run hoga
//yha humne server ka instance call kiya hai or fir usko listen kiya h
// app.listen me do arguement jate h phla port number and dusra call back function 
// activate the server 300

app.listen(PORT,()=>{
    console.log(`Server started at port no ${PORT} `)
});
// app jo ki server ki instance h uspe hmne route define kiya h jese hi / is par aaoge tb response m hello jee milega
//ye btata  h ki iss port par listen karna hai
app.get('/',(request,response)=>{
    response.send("hello jee"); //home page par jane par response me ye btata hai ye behaviour btata h
})
// // '/' is for home page ki jab b home page par aaoge tb usko route ko call kzr lena hota h  route ki jab b is route par jaoge  tb get request call hofii or response me send karoo hello jee
// data send karne ke lie post ka use karte hai
// client jo b data post karna chahta h vo post ki request ke andr pda hota hai
app.post('/api/cars',(request,response)=>{
    const {name , brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully.");
});
const mongoose = require('mongoose');
// mongoose ka use karke express ko db ke sath connect kr re hoo

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("succc")})
.catch((error)=>{
    console.log("error")
});
// app.post("/car",(req,res)=>{
//     res.send("Received a post request");
// });

 