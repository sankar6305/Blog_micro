import React from 'react'
import { useState, useEffect } from 'react'
import CommentsForEach from './CommentsForEach'
import CommentShows from './CommentShows'

import axios from 'axios'




const PostsShows = () => {

    const [posts, setPosts] = useState({});
    const [flag, setFlag] = useState(0);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:4002/posts');
            //console.log(res.data);
            setPosts(res.data);
            // console.log(res.data);
        }
        fetchPosts();
    }, [flag]);


    return (
        <div>
            {
                Object.values(posts).map(post => {
                    return (
                        <div className="card" style={{ display: "inline-block", width: '30%', marginBottom: '20px', flex: 'row', marginLeft: "2%" }} key={post.id}>
                            <div className="card-body">
                                <h3>{post.title}</h3>
                                <CommentShows comments1={post.comments} />
                                <CommentsForEach id={post.id} />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default PostsShows
