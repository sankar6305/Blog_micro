import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CommentShows = ({ id }) => {
    const [comments, setComments] = useState({});
    //const [flag, setFlag] = useState(0);

    useEffect(() => {
        const fetchComments = async () => {
            const res = await axios.get(`http://localhost:4001/posts/${id}/comments`);
            //console.log(res.data);
            setComments(res.data);
        }
        fetchComments();
    }, []);

    const CommentsList = Object.values(comments).map(comment => {
        <li key={comment.id}>{comment.content}</li>
    })


    return (
        <div>
            <ul>
                {Object.values(comments).map(comment => {
                    return (
                        <li key={comment.id}>{comment.content}</li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default CommentShows
