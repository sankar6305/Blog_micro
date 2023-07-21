import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const PostCreate = () => {

    const [title, setTitle] = useState();

    const CreatePost = async () => {
        await axios.post('http://localhost:4000/posts', {
            title
        });
        console.log("success");
        //setTitle('');
    }


    return (
        <div className='Form'>
            <h1>Create Post</h1>
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />

                </div>
                <button className="btn btn-primary" onClick={CreatePost}>Submit</button>
            </form>
        </div>
    )
}

export default PostCreate
