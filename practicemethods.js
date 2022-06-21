const express = require('express');
const router = express.Router();
const data = require('../day5/practicedata');

router.get('/', (req, res)=>{
    res.json(data);
})

// router.get('/data/:id', (req, res) =>{
//     let id = req.params.id;
//     console.log(id);
//     res.send(data.filter(data => data.id == Number(id)))
// })

//accessing through query
// router.get('/data', (req, res) => {
//     res.json(data)
// })

//for POST method
router.post("/data",(req, res) => {
    let newData = {
        id: req.body.id,
        name: req.body.name,
        address: req.body.address
    }
    data.push(newData);
    console.log(data)
    res.status(200).json({message:"Details added successfully", data:data})
})

//for PUT method
router.put("/data/:id", (req,res)=>{
    let index = req.params.id-1;
    if(data[index]){
        data[index].id = req.body.id,
        data[index].name = req.body.name,
        data[index].address = req.body.address
        res.status(200).json({message:"Details Updated successfully", data: data})
    }else{
        res.status(404).json("Details not found")
    }
})

//for delete method
router.delete("/data/:id", (req, res)=>{
    const id = req.params.id-1
    console.log(data[id])
    const deletedBlog = data.filter(blog=>blog!=data[id])
    res.status(404).json({message:"Blog deleted successfully", data:deletedBlog})
})

module.exports = router;