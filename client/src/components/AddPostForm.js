import React, { useState, useContext} from 'react';
import {PostContext} from '../context/PostContext.js'


export default function AddPostForm(props){

    const initInputs = { text: props.text || "",
         topic: props.topic || "", 
         user: props.user || "", 
         postDate: props.postDate || "", 
         lastEdited: props.lastEdited || ""}

    const [inputs, setInputs] = useState(initInputs)
    const { addPost, updatePost, deletePost, posts } = useContext(PostContext) 

    function handleChangePost (e) {
        const {name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value}))
    }

    function handleSubmitPost(e){
        e.preventDefault()
        addPost(inputs)
        setInputs(initInputs)
    }
    return (
        <form className="post-form"onSubmit={handleSubmitPost}>
            <input
                id="post-content-input"
                type="text"
                name="text"
                value={inputs.text}
                onChange={handleChangePost}
                placeholder="Post New Content"
                />
            
            <button id="add-post-button" >Post</button>
        </form>
    )
}