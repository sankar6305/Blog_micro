const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())


app.post("/events", async (req, res) => {
    const event = req.body;
    await axios.post("http://localhost:4002/events", event).catch((err) => {
        console.log(err.message);
    });
    res.send({
        "status": "ok"
    })
    console.log(req.body);
});



app.listen(4005, () => {
    console.log("Listeneing at post 4005");
})