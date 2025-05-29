const express = require('express');
const app = express();
app.use(express.json());

app.post("/submitassignment", (req, res) => {
    res.send('<html><body>INSIDE VIEW SUBMIT ASSIGNMENT API..</body></html>')
})

app.get('/viewassignment', (req, res) => {
    res.send('<html><body>INSIDE VIEW ASSIGNMENT API..</body></html>')
})

app.put('/editprofile', (req, res) => {
    res.send('<html><body>INSIDE EDIT PROFILE API..</body></html>')
})

app.listen(5001, () =>
    console.log('EXPRESS Server Started at Port No: 5001'));