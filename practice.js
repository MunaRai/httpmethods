const bodyparser = require('body-parser')
const express = require('express');
const app = express();
const forroute = require('../day5/practicemethods');
const PORT = 3000;

app.use(bodyparser.json())

app.use("/", forroute)

//for listening
app.listen(PORT, () => {
    console.log("Listening.");
});
