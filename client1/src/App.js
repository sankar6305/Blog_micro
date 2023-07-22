import React from 'react'
import PostCreate from './PostCreate'
import PostsShows from './PostsShows'


const App = () => {
  return (
    <div>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostsShows />
    </div>
  )
}

export default App
