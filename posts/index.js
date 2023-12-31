const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const { randomBytes } = require('crypto');
const app = express();
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());

posts = {};

app.get('/posts', (req, res) => {
    // console.log(posts);
    res.send(posts);
});


app.post('/posts', async(req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    // console.log(req.body);
    posts[id] = {
        id, title
    };
    const event = {
        type: "PostCreated",
        data: {
            id,
            title
        }
    }
    await axios.post("http://localhost:4005/events", event);
    res.status(201).send(posts[id]);
});


app.listen(4000, () => {
    console.log('Listening on 4000');
});
