const express = require('express');
const app = express();
const PORT = 3003;

const middleWare = (req, res, next) =>{
    console.log("Middleware function");
    req.currentTime = new Date(Date.now());
    next();
}

// app.get("/", middleWare, (req, res)=>{
//     console.log("I am home");
//     console.log(req.currentTime);
    
//     res.send("hello world");
// })

// app.get("/about", middleWare, (req, res)=>{
//     console.log("I am about");
//     console.log(req.currentTime);
    
//     res.send("hello world 2");
// })

// common middleware

app.use(middleWare);

app.get("/", (req, res)=>{
    console.log("I am home");
    console.log(req.currentTime);
    
    res.send("hello world");
})

app.get("/about", (req, res)=>{
    console.log("I am about");
    console.log(req.currentTime);
    
    res.send("hello world 2");
})


// error handling middleware

app.use((req, res, next)=>{
    res.send("404 not found");
})

app.use((err, req, res, next)=>{
    res.status(500).send('something block');
})

app.listen(PORT, (req, res)=>{
    console.log(`http://localhost:${PORT}`);
    
})