const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const app = express();
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());

commentsByPostId = {};


app.get("/posts/:id/comments", (req, res) => {
    const id_ = req.params.id;
    const comments = commentsByPostId[id_] || [];
    res.send(comments);
});

app.post("/posts/:id/comments", (req, res) => {
    const commentId = randomBytes(4).toString("hex");
    const { content } = req.body;
    console.log(commentId, " ", content);
    const id_ = req.params.id;
    const comments = commentsByPostId[id_] || [];

    comments.push({ id: commentId, content });
    // console.log(content, " ", comments, " ",  id_);
    commentsByPostId[id_] = comments;

    res.status(201).send(comments);

});


app.listen(4001, () => {
    console.log("Listening at post 4001");
});