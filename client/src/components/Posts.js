import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'
import AddPostForm from './AddPostForm'


export default function Posts(){
    
    const [posts, setPosts] = useState([])

function getPosts(){
    axios.get("/posts")
    .then(res => {
        setPosts(res.data)
    })
    .catch(error => console.log(error));
}

function addPost(newPost){
    axios.post("/protected/posts", newPost)
    .then(res => {
        setPosts(previousPosts => [...previousPosts, res.data ] )
    })
    .catch(error => console.log(error))

}

function deletePost(_id) {
    axios.delete("/protected/posts", _id)
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
        {posts.map(post => <Post {...post} key={post.userName} deletePost={deletePost}/>)}
        <AddPostForm addPost={addPost}/>
    </div>
)
}

