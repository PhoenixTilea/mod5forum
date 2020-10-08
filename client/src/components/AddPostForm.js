import React, { useState } from 'react';


export default function AddPostForm(props){
    const initInputs = { postContent: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChangePost (e) {
        const {name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value}))
    }

    function handleSubmitPost(e){
        e.preventDefault()
        props.addPost(inputs)
        setInputs(initInputs)
    }
    return (
        <form className="post-form"onSubmit={handleSubmitPost}>
            <input
                id="post-content-input"
                type="text"
                name="postContent"
                value={inputs.postContent}
                onChange={handleChangePost}
                placeholder="Post New Content"/>
            
            <button id="add-post-button">Add Post</button>
        </form>
    )
}