// Connect mongoDB database with mongoose
const express = require('express');
const app = express();
const PORT = 5000;

const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/testProductDB').then(()=>{
//     console.log('DB is connected');
// }).catch((error)=>{
//     console.log('DB is not connected');
//     console.log(error);
//     process.exit(1);
// })

const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testProductDB');
        console.log('db is connected');
    } catch (error) {
        console.log('db is not connected');
        console.log(error.message);
        process.exit(1);
    }
}

app.get('/', (req, res)=>{
    res.send('<h1>Hello MongoDB</h1>');
})

app.listen(PORT, async ()=>{
    console.log(`listening at ${PORT}`);
    await connectDB();
})