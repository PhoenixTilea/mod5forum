import React from "react"
import User from "./User"
import Replies from "./Replies"
import AddReplyForm from "./AddReplyForm"


export default function Reply(props){
    
    return (
        <div className="reply">
         <User />
          <p id="reply-content"></p>
          <AddReplyForm />
          <Replies />
        </div>
    )
}