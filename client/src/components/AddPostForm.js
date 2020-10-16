import React, { useState } from 'react';


export default function AddPostForm(props){

    const initInputs = { text: props.text || "",
         topic: props.topic || "", 
         user: props.user || "", 
         postDate: props.postDate || "", 
         lastEdited: props.lastEdited || ""}

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
            <textarea
                id="post-content-input"
                type="text"
                name="text"
                value={inputs.text}
                onChange={handleChangePost}
                placeholder="Reply/Post Content"
                />
            
            <button id="add-post-button">{props.btnText}</button>
        </form>
    )
}