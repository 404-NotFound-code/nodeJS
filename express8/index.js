// MVC (model, views, controller) architechture

// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.urlencoded({extended: true}))

// const users = [
//     {
//         name: "Rafiq",
//         age: 40
//     },
//     {
//         name: "Salam",
//         age: 25
//     }
// ]

// const htmlForm = `
//     <form action="/users" method="POST">
//         <input type="text" name="name" placeholder="Enter your name"/>
//         <input type="text" name="age" placeholder="Enter your age"/>
//         <button type="submit"> Save user </button>
//     </form>
// `

// app.get("/users", (req, res)=>{
//     res.send(htmlForm);
// })

// app.post("/users", (req, res)=>{
//     const name  = req.body.name;
//     const age = Number(req.body.age);
//     const user = {
//         name, age 
//     }

//     users.push(user)
//     res.status(201).json({
//         success: true,
//         users
//     })
// })

// app.use((req, res, next)=>{
//     res.send(404).json({
//         message: "not found",
//     })
// })

// app.listen(PORT, ()=>{
//     console.log(`http://localhost:${PORT}`);
    
// })


// ******************************************************

const express = require('express');
const cors = require("cors");

const userRouter = require("./routes/users.route")

const productRouter = require("./routes/products.route")

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(cors()); 

app.use(userRouter);
app.use(productRouter);


app.use((req, res, next)=>{
    res.send(404).json({
        message: "not found",
    })
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});

