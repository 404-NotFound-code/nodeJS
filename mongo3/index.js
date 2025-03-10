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

// Create 
app.post('/products', async (req, res)=>{
    try{
        // get data from request body
        const title = req.body.title;
        const price = req.body.price;
        const description = req.body.description;

        const newProduct = new Product({
            title: title, // title or title = req.body.title
            price: price, // price
            description: description, // description 
        })

        const productData = await newProduct.save(); 

        

        // res.status(201).send({title, price, description});
        res.status(201).send(productData);
    } catch (error){
        res.status(500).send({message: error.message});
    }
})

// GET
app.get('/products', async (req, res)=>{
    try {
        const products = await Product.find();
        // const products = await Product.find().limit(2);

        if(products){
            res.status(200).send(products);
        } else {
            res.status(404).send({
                message: 'products not found'
            })
        }
    } catch (error) {
        res.status(500).send({message: error.message});
    }
})

app.get('/products/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const product = await Product.find({_id: id}); // returns an array
        // const product = await Product.findOne({_id: id}); // returns an object

        // const product = await Product.findOne({_id: id}).select({title: 1, _id: 0, price: 1}); // 1 = true, 0 = false
        // const product = await Product.findOne({_id: id}, {title: 1}); // by default _id is visible

        // res.send(products);

        // if(product){
        //     res.status(200).send(product);
        // } else {
        //     res.status(404).send({
        //         message: 'product not found'
        //     })
        // }

        if(product){
            res.status(200).send({
                success: true,
                message: 'return single product',
                data: product
            });
        } else {
            res.status(404).send({
                success: false,
                message: 'product not found'
            })
        }
    } catch (error) {
        res.status(500).send({message: error.message});
    }
})


app.listen(PORT, async ()=>{
    console.log(`listening at ${PORT}`);
    await connectDB();
})

// database --> collection(model) --> document(id, title)

// POST: /products --> create a product
// GET: /products --> return all the products
// GET: /products/:id --> return a specific product
// Put: /products/:id --> update a product based on id
// DELETE: /products/:id --> delete a product based on id

