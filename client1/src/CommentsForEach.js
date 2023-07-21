import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const CommentsForEach = ({ id }) => {

    const [title1, setTitle1] = useState();

    const CreateComment = async () => {
        await axios.post(`http://localhost:4001/posts/${id}/comments`, {
            "content" : title1
        });
        //console.log("success");
        //setTitle('');
    }


  return (
    <div>
          <form>
              <div className="form-group">
                  <label>Comment</label>
                  <input value={title1} onChange={(e) => setTitle1(e.target.value)} className="form-control" />
              </div>
              <button className="btn btn-primary" onClick={CreateComment}>Submit</button>
          </form>
    </div>
  )
}

export default CommentsForEach
