import React from "react"
import User from "./User"
import Replies from "./Replies"
import AddReplyForm from "./AddReplyForm"


export default function Reply(props){
    const { replyContent } = props
    return (
        <div className="reply">
         <User />
          <p id="reply-content">{replyContent}</p>
          <AddReplyForm />
          <Replies />
        </div>
    )
}