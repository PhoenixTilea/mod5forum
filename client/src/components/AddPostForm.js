import React, { useState, useContext} from 'react';
import {PostContext} from '../context/PostContext.js'


export default function AddPostForm(props){

    const initInputs = { text: props.text || ""};

    const [inputs, setInputs] = useState(initInputs)
    const { addPost, updatePost } = useContext(PostContext) 

    function handleChangePost (e) {
        const {name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value}))
    }

    function handleSubmitPost(e){
        e.preventDefault()
        if (props._id) {
			addPost(inputs)
		} else {
			updatePost(props._id, inputs);
		}
        setInputs(initInputs)
    }
    return (
        <form className="post-form"onSubmit={handleSubmitPost}>
            <textarea
                id="post-content-input"
                name="text"
                value={inputs.text}
                onChange={handleChangePost}
                placeholder="Post New Content"
                ></textarea>
            
            <button id="add-post-button" >Post</button>
        </form>
    )
}