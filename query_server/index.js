const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())

const posts = {};

app.get("/posts", (req, res) => {
    res.send(posts);
})

app.post("/events", (req, res) => {
    const { type, data } = req.body;

    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = {
            id,
            title,
            comments: []
        }
    }
    if (type === 'CommentCreated') {
        const { id, content, id_ } = data;
        const post = posts[id_]
        post.comments.push({ id, content });
    }

    console.log(posts);
    res.send({});
});


app.listen(4002, () => {
    console.log("Listeneing at post 4002");
})