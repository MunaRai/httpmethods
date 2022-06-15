const bodyparser = require('body-parser')
const express = require('express');
const app = express();
const PORT = 3000;

app.use(bodyparser.json())

details = [{
    id: 1,
    name: 'Muna',
    address: 'old-baneshwor'
},
{
    id: 2,
    name: 'Numa',
    address: 'dharan'
},
{
    id: 3,
    name: 'uma',
    address: 'pathari'
}
]

app.get('/details/:name/:address', (req, res)=>{
    res.json(details);
})

app.get('/details/:id', (req, res) =>{
    let id = req.params.id;
    console.log(id);
    res.send(details.filter(details => details.id == Number(id)))
})

//accessing through query
app.get('/details', (req, res) => {
    let name = req.query.name
    res.json(details)
})

//for POST method
app.post("/details",(req, res) => {
    let newData = {
        id: req.body.id,
        name: req.body.name,
        address: req.body.address
    }
    details.push(newData);
    console.log(details)
    res.status(200).json({message:"Details added successfully", data:details})
})

//for PUT method
app.put("/details/:id", (req,res)=>{
    let index = req.params.id-1;
    if(details[index]){
        details[index].id = req.body.id,
        details[index].name = req.body.name,
        details[index].address = req.body.address
        res.status(200).json({message:"Details Updated successfully", data: details})
    }else{
        res.status(404).json("Details not found")
    }
})

//for delete method
app.delete("/details/:id", (req, res)=>{
    const id = req.params.id-1
    console.log(details[id])
    const deletedBlog = details.filter(blog=>blog!=details[id])
    res.status(404).json({message:"Blog deleted successfully", data:deletedBlog})
})

//for listening
app.listen(PORT, () => {
    console.log("Listening.");
});
