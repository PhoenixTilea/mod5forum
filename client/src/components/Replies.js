import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Reply from './Reply'
import AddReplyForm from './AddReplyForm'


export default function Replies(){
    
    const [replies, setReplies] = useState([])

function getReplies(){
    axios.get("/replies")
    .then(res => {
        setReplies(res.data)
    })
    .catch(error => console.log(error));
}

function addReply(newReply){
    axios.post("/protected/replies", newReply)
    .then(res => {
        setReplies(previousReplies => [...previousReplies, res.data ] )
    })
    .catch(error => console.log(error))

}

useEffect(() => {
   getReplies()
},[])


return (
    <div className="replies-container">
        {replies.map(reply => <Reply {...reply} key={reply.userName} />)}
        <AddReplyForm addReply={addReply}/>
    </div>
)
}

