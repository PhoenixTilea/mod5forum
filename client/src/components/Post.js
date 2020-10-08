import React from "react"
import User from "./User"
import AddReplyForm from "./AddReplyForm"

export default function Post(props){
    const { text ,_id} = props

    function handleClickDeletePost() {
        props.deletePost(_id)
    }
    
    return (
        <div className="post">
            <User />
            <h3 className="post-title">What is Vanilla Javascript?</h3>
            <button id="delete-post-button" onClick={handleClickDeletePost}>Delete Post</button>
            <p id="post-content">{text}</p>
            <AddReplyForm />
            <hr></hr>
            
        </div>
    )
}