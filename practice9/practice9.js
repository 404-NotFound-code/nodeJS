const express = require('express')
const app = express();
const todoHandler = require("./routeHandler/todoHandler");
const mongoose = require('mongoose');

app.use(express.json());

// database connection with mongoose
mongoose.connect("mongodb://localhost/todos")
.then(()=> console.log('connection successful'))
.catch((err) => console.log(err))

// application routes

app.use('/todo', todoHandler);

// default error handler
function errorHandler(err, req, res, next){
    if(res.headerSent){
        return next(err);
    }
    res.status(500).json({error: err});
}

app.listen(3000, ()=>{
    console.log('listening at port 3000'); 
})