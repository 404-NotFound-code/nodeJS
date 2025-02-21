const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/register", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/register", (req, res)=>{
    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`<h2>My name is ${fullName} and I'm ${age} years old`);
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})