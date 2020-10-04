import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'
import AddPostForm from './AddPostForm'


export default function Posts(){
    
    const [posts, setPosts] = useState([{content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",}])

function getPosts(){
    axios.get("http://localhost:8000/posts")
    .then(res => {
        setPosts(res.data)
    })
    .catch(error => console.log(error));
}

function addPost(newPost){
    axios.post("http://localhost:8000/protected/posts", newPost)
    .then(res => {
        setPosts(previousPosts => [...previousPosts, res.data ] )
    })
    .catch(error => console.log(error))

}

function deletePost() {
    axios.delete("http://localhost:8000/protected/posts/id",)
    .then(res => res.data)
    .catch((error) => {
      throw error.res.data
    })
}
useEffect(() => {
   getPosts()
},[])


return (
    <div className="posts-container">
        <h1>Posts</h1>
        {posts.map(post => <Post {...post} key={post.userName} deletePost={deletePost}/>)}
        <AddPostForm addPost={addPost}/>
    </div>
)
}

