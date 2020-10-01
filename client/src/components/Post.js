import React from "react"
import User from "./User"
import AddReplyForm from "./AddReplyForm"

export default function Post(props){
    const { postContent , _id} = props

    function handleClickDeletePost() {
        props.deletePost(_id)
    }
    
    return (
        <div className="post">
            <User />
            <p id="post-content">{postContent}</p>
            <AddReplyForm />
            <button onClick={handleClickDeletePost}>Delete Post</button>
        </div>
    )
}