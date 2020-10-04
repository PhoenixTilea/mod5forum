import React from "react"
import User from "./User"
import AddReplyForm from "./AddReplyForm"

export default function Post(props){
    const { content , _id} = props

    function handleClickDeletePost() {
        props.deletePost(_id)
    }
    
    return (
        <div className="post">
            <User />
            <h4 className="post-title">Post Title</h4>
            <button id="delete-post-button" onClick={handleClickDeletePost}>Delete Post</button>
            <p id="post-content">{content}</p>
            <AddReplyForm />
            <hr></hr>
            
        </div>
    )
}