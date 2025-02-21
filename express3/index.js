const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/home.html")
})

app.get("/triangle", (req, res)=>{
    res.sendFile(__dirname + "/triangle.html");
})

app.post("/triangle", (req, res)=>{
    const base = req.body.base;
    const height = req.body.height;

    res.send(`<h1>The area of tringle is ${0.5*base*height}`);
})

app.get("/circle", (req, res)=>{
    res.sendFile(__dirname + "/circle.html");
})

app.post("/circle", (req, res)=>{
    const radius = req.body.radius;
    res.send(`<h1>The area of circle is ${3.14*radius*radius}`);
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
    
})