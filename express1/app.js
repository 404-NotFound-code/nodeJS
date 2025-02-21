const express = require('express');
const app = express();

const userRouter = require('./routes/users.route');

app.use("/api/user", userRouter);

// app.get('/', (req, res)=>{
//     res.send("I am a get request at home route");
//     res.end();
// })

// // post, put, delete = see output using postman

// app.post('/', (req, res)=>{
//     res.send("I am a post request at home route");
//     res.end();
// })

// app.put('/', (req, res)=>{
//     res.send("I am a put request at home route");
//     res.end();
// })

// app.delete('/', (req, res)=>{
//     res.send("I am a delete request at home route");
//     res.end();
// })


// express.js routers and route

// app.get('/', (req, res)=>{
//     res.send("<h1>I am a get request at home route</h1>");
//     res.end();
// })

// app.get('/about', (req, res)=>{
//     res.send("<h1>I am a get request at about route</h1>");
//     res.end();
// })

// app.get('/contact', (req, res)=>{
//     res.send("<h1>I am a get request at contact route</h1>");
//     res.end();
// })


// **********************************************************************

app.use("/", (req, res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
})

app.use("/register", (req, res)=>{
    // res.status(200).json({
    //     title: "This is register page",
    //     statusCode: 200,
    // });

    // res.redirect("/login");

    res.statusCode = 200;
    res.sendFile(__dirname + '/views/register.html');
});

app.get("/login", (req, res)=>{
    res.send("<mark>This is login page</mark>");
    // res.end();

    // res.cookie("language", "javascript");
    // res.cookie("library", "node");
    // res.cookie("framework", "express");

    // res.clearCookie("language"); 

    res.append("id", "1300");
});


app.use((req, res)=>{ // if route doesnot match
    res.send("<h1>404 ! Not Found</h1>");
    res.end();
})


module.exports = app;