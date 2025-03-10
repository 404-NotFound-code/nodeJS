// Mongoose schema and model
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose');

// create product schema
const productSchema = new mongoose.Schema({
    // title: String,
    title: {
        type: String,
        required: true
    },
    price: Number,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// create product model
const Product = mongoose.model("Products", productSchema);

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

app.post('/products', async (req, res)=>{
    try{
        // get data from request body
        const title = req.body.title;
        const price = req.body.price;
        const description = req.body.description;

        // const newProduct = new Product({
        //     title: title, // title or title = req.body.title
        //     price: price, // price
        //     description: description, // description 
        // })

        // const productData = await newProduct.save(); 

        const productData = await Product.insertMany([
            {
                title: "iphone 15 pro max",
                price: 54000,
                description: "This is a best camera phone ever"
            },
            {
                title: "pi phone",
                price: 100000,
                description: "This is an ultra model phone"
            }
        ])

        // res.status(201).send({title, price, description});
        res.status(201).send(productData);
    } catch (error){
        res.status(500).send({message: error.message});
    }
})

app.listen(PORT, async ()=>{
    console.log(`listening at ${PORT}`);
    await connectDB();
})

// database --> collection(model) --> document(id, title)