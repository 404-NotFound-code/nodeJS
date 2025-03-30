const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const todoSchema = require('../schemas/todoSchema');
const Todo = new mongoose.model("Todo", todoSchema);

// get all the todos
router.get('/', async (req, res)=>{
    try {
        const todos = await Todo.find({status: "active"}).select({
            _id: 0,
            __v: 0,
            date: 0
        }).limit(2).skip(1);
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({
            error: "There was a server-side error",
        });
    }
    
})

// get a todo by id
router.get('/:id', async (req, res)=>{
    try {
        const todos = await Todo.find({_id: req.params.id})
        res.status(200).json({
            message: "Successfully"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server-side error",
        });
    }
})

// post a todo
// router.post('/', async (req, res)=>{
//     const newTodo = new Todo(req.body);
//     await newTodo.save((err)=>{
//         if (err){
//             res.status(500).json({
//                 error: "There was a server side error",
//             })
//         } else{
//             res.status(200).json({
//                 message: "Todo was inserted successfully",
//             })
//         }
//     })
// })

// post multiple todo
router.post('/all', async (req, res) => {
    try {
        await Todo.insertMany(req.body);
        res.status(200).json({
            message: "Todos were inserted successfully",
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server-side error",
        });
    }
});

// put todo
router.put('/:id', async (req, res)=>{
    // try {
    //     await Todo.updateOne({_id: req.params.id}, {$set: {
    //         status: 'active',
    //     }});
    //     res.status(200).json({
    //         message: "Todo was updated successfully",
    //     });
    // } catch (err) {
    //     res.status(500).json({
    //         error: "There was a server-side error",
    //     });
    // }

    try {
        const result = await Todo.findByIdAndUpdate({_id: req.params.id}, {$set: {
            status: 'active',
        }}, {new: true, useFindAndModify: false});

        console.log(result);
        
        res.status(200).json({
            message: "Todo was updated successfully",
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server-side error",
        });
    }
    
})

// delete todo
router.delete('/:id', async (req, res)=>{
    try {
        await Todo.deleteOne({_id: req.params.id})
        res.status(200).json({
            message: "Todo was deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            error: "There was a server-side error",
        });
    }
})

module.exports = router;