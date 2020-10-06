import React, { useState } from 'react';


export default function AddReplyForm(props){
    const initInputs = { replyContent: ""}
    const [inputs, setInputs] = useState(initInputs)
    function handleChangeReply (e) {
        const {name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value}))
    }
   
    function handleSubmitReply(e){
        e.preventDefault()
        props.addReply(inputs)
        setInputs(initInputs)
    }
    return (
        <form className="reply-form"onSubmit={handleSubmitReply}>
            <input
                id="reply-content-input"
                type="text"
                name="replyContent"
                value={inputs.replyContent}
                onChange={handleChangeReply}
                placeholder="Reply to Post"/>
            
            <button id="add-reply-button">Add Reply</button>
        </form>
    )
}