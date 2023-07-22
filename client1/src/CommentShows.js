import React from 'react'

const CommentShows = ({ comments1 }) => {

    return (
        <div>
            <ul>
                {
                    Object.values(comments1).map(comment => (
                        <li key={comment.id}>{comment.content}</li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default CommentShows
