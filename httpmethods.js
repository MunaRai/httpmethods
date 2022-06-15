const express = require('express');
const app = express()
const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('hello there...')
// })

// app.post('/', (req, res) => {
//     res.send('Get a post request.')
// })

// app.put('/user', (req, res) => {
//     res.send('Got put request at /user.')
// })

app.get('/user', (req, res) => {
    res.send('Got delete request at /user.')
})

app.listen(PORT, () => {
    console.log("Listening.");
});